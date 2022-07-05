import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { CurrencyService } from 'src/app/Modules/currency/currecny.service';
import * as currencyActions from '../Actions/Currency.actions';

@Injectable()
export class CountryEffects {
  constructor(private dataService: CurrencyService, private actions$: Actions) {}
  
   loadCountryRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadCurrencyRequestAction),
      switchMap(countryAction => {
        const subject = "currency";
        return this.dataService.get(currencyActions.id).pipe(
          map((currency: any) => {
              return currencyActions.currencyActions.loadCurrencySuccessAction({ currency })
          }),
          catchError((error: any) => {
            return observableOf(currencyActions.loadCountryFailureAction({ error }))
          })
        )
      })
  ))
 
  loadRequestEffect$ =  createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadRequestAction),
      switchMap(action => {
        return this.dataService.getCountries().pipe(
          map((items: any) => {
              return currencyActions.loadSuccessAction({ items })
          }),
          catchError(error => {
            return observableOf(currencyActions.loadFailureAction({ error }))
          })
        )
      })
  ))
 
  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.saveRequestAction),
      switchMap(action => {
        const subject = "currency";      
        return this.dataService.create(action.item).pipe(
          map((item: any) => {
              return currencyActions.saveSuccessAction({ item })
          }),
          catchError(error => {
            return observableOf(currencyActions.saveFailureAction({ error }))
          })
        )
      })
  ))
 
  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.updateRequestAction),
    switchMap(action => {
      return this.dataService.update(action.item).pipe(
          map((item: any) => {
              return currencyActions.updateSuccessAction({ item })
          }),
          catchError(error => {
            return observableOf(currencyActions.updateFailureAction({ error }))
          })
        )
      })
  ))
 
  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.deleteRequestAction),
    switchMap(action => {
      return this.dataService.delete(action.id).pipe(
          map((item: any) => {
              return currencyActions.deleteSuccessAction({ id: action.id })
          }),
          catchError(error => {
            return observableOf(currencyActions.deleteFailureAction({ error }))
          })
        )
    })
  ))
}