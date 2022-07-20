import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {  of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap , concatMap, tap} from 'rxjs/operators';
import { CountryService } from 'src/app/Modules/country/country.service';
import * as countryActions from '../Actions/Country.actions';

@Injectable()
export class CountryEffects {
  constructor(private dataService: CountryService, private actions$: Actions, private router: Router) {}

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
 
  loadRequestEffect$ =  createEffect(() => this.actions$.pipe(
    ofType(countryActions.loadRequestAction),
      switchMap(action => {
        return this.dataService.getCountries().pipe(
          map((items: any) => {
              return countryActions.loadSuccessAction({ items })
          }),
          catchError(error => {
            return observableOf(countryActions.loadFailureAction({ error }))
          })
        )
      })
  ))
 
  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.saveRequestAction),
      switchMap(action => {
        const subject = "country";      
        return this.dataService.create(action.item).pipe(
          map((item: any) => {
              return countryActions.saveSuccessAction({ item })
          }),    tap(() => this.router.navigateByUrl('/countries'))
,
          catchError(error => {
            return observableOf(countryActions.saveFailureAction({ error }))
          })
        )
      })
  ))
//   createCountry$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(countryActions.saveRequestAction),
//     concatMap((action:any) => this.dataService.create(action.items)),
//     tap(() => this.router.navigateByUrl('/countries'))
//   ),
//   {dispatch: false}
// );
 
  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.updateRequestAction),
    switchMap(action => {
      return this.dataService.update(action.id,action.item).pipe(
          map((item: any) => {
              return countryActions.updateSuccessAction({ item })
          }), tap(() => this.router.navigateByUrl('/countries'))
          ,
          catchError(error => {
            return observableOf(countryActions.updateFailureAction({ error }))
          })
        )
      })
  ))
 
  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(countryActions.deleteRequestAction),
    switchMap(action => {
      return this.dataService.delete(action.id).pipe(
          map((item: any) => {
              return countryActions.deleteSuccessAction({ id: action.id })
          }),
          catchError(error => {
            return observableOf(countryActions.deleteFailureAction({ error }))
          })
        )
    })
  ))
}