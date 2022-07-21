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

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
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
        }), tap(() => this.router.navigateByUrl('/currencies'))
      )
    })
  ))

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(currencyActions.updateRequestAction),
    switchMap(action => {
      return this.dataService.update(action.id, action.item).pipe(
        map((item: any) => {
          return currencyActions.updateSuccessAction({ item })
        }), tap(() => this.router.navigateByUrl('/currencies')),
        catchError(error => {
          return observableOf(currencyActions.updateFailureAction({ error }))
        })
      )
    })
  ))

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currencyActions.deleteRequestAction),
      concatMap((action: any) => this.dataService.delete(action.id)),
      tap(() => this.router.navigateByUrl('/currencies'))

    ),
    { dispatch: false }
  );
}