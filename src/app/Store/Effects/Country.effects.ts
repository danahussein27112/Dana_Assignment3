import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, concatMap, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/Modules/country/country.service';
import * as countryActions from '../Actions/Country.actions';

@Injectable()
export class CountryEffects {
  constructor(private dataService: CountryService, private actions$: Actions, private router: Router) { }

  loadCountryRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.loadCountryRequestAction),
    switchMap(countryAction => {
      return this.dataService.getCountry(countryAction.id).pipe(
        map((country: any) => {
          return countryActions.CountryActions.loadCountrySuccessAction({ country })
        }),
        catchError((error: any) => {
          return observableOf(countryActions.loadCountryFailureAction({ error }))
        })
      )
    })
  ))

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.loadCountriesRequestAction),
    switchMap(() => {
      return this.dataService.getCountries().pipe(
        map((items: any) => {
          return countryActions.loadCountriesSuccessAction({ items })
        }),
        catchError(error => {
          return observableOf(countryActions.loadCountriesFailureAction({ error }))
        })
      )
    })
  ))

  CreateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.createCountryRequestAction),
    switchMap(action => {
      return this.dataService.create(action.item).pipe(
        map((item: any) => {
          return countryActions.createCountrySuccessAction({ item })
        }), tap(() => this.router.navigateByUrl('/countries'))
        ,
        catchError(error => {
          return observableOf(countryActions.createCountryFailureAction({ error }))
        })
      )
    })
  ))

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.updateCountryRequestAction),
    switchMap(action => {
      return this.dataService.update(action.id, action.item).pipe(
        map((item: any) => {
          return countryActions.updateCountrySuccessAction({ item })
        }), tap(() => this.router.navigateByUrl('/countries'))
        ,
        catchError(error => {
          return observableOf(countryActions.updateCountryFailureAction({ error }))
        })
      )
    })
  ))

  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.deleteCountryRequestAction),
    switchMap(action => {
      return this.dataService.delete(action.id).pipe(
        map(() => {
          return countryActions.deleteCountrySuccessAction({ id: action.id })
        }),
        catchError(error => {
          return observableOf(countryActions.deleteCountryFailureAction({ error }))
        })
      )
    })
  ))
}