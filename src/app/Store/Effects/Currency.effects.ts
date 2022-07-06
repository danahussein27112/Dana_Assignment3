import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Country } from 'src/app/Modules/country/country.model';
import { CurrencyService } from 'src/app/Modules/currency/currecny.service';
import * as currencyActions from '../Actions/Currency.actions';
@Injectable()
export class CurrencyEffects {
  constructor(private dataService: CurrencyService, private actions$: Actions) {}
  
  loadCurrencyRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadCurrencyRequestAction),
      switchMap(currencyAction => {
        const subject = "currency";
        return this.dataService.getcurrecny(currencyAction.id).pipe(
          map((currency: any) => {
              return currencyActions.CurrencyActions.loadCurrencySuccessAction({ currency })
          }),
          catchError((error: any) => {
            return observableOf(currencyActions.loadCurrencyFailureAction({ error }))
          })
        )
      })
  ))
 
  loadRequestEffect$ =  createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadRequestAction),
      switchMap(action => {
        return this.dataService.getCurrencies().pipe(
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
        return this.dataService.savecurrecny(action.item).pipe(
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