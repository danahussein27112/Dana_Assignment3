import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { CurrencyService } from 'src/app/Modules/currency/currecny.service';
import * as currencyActions from '../Actions/Currency.actions';
@Injectable()
export class CurrencyEffects {
  constructor(private dataService: CurrencyService, private actions$: Actions, private router: Router) { }

  loadCurrencyRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadCurrencyRequestAction),
    switchMap(currencyAction => {
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

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.loadCurrenciesRequestAction),
    switchMap(action => {
      return this.dataService.getCurrencies().pipe(
        map((items: any) => {
          return currencyActions.loadCurrenciesSuccessAction({ items })
        }),
        catchError(error => {
          return observableOf(currencyActions.loadCurrenciesFailureAction({ error }))
        })
      )
    })
  ))

  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.createCurrencyRequestAction),
    switchMap(action => {
      return this.dataService.savecurrecny(action.item).pipe(
        map((item: any) => {
          return currencyActions.createCurrencySuccessAction({ item })
        }), tap(() => this.router.navigateByUrl('/currencies'))
      )
    })
  ))

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.updateCurrencyRequestAction),
    switchMap(action => {
      return this.dataService.update(action.id, action.item).pipe(
        map((item: any) => {
          return currencyActions.updateCurrencySuccessAction({ item })
        }), tap(() => this.router.navigateByUrl('/currencies')),
        catchError(error => {
          return observableOf(currencyActions.updateCurrencyFailureAction({ error }))
        })
      )
    })
  ))

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currencyActions.deleteCurrencyRequestAction),
      concatMap((action: any) => this.dataService.delete(action.id)),
      tap(() => this.router.navigateByUrl('/currencies'))

    ),
    { dispatch: false }
  );
}