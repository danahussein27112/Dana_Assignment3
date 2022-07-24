import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CurrencyCountriesService } from "src/app/Modules/CurrencyCountries/currencyCountries.service";
import { of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, concatMap, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { CurrencyCountriesActions } from "../Actions/CurrencyCountries.actions";

@Injectable()

export class CurrencyCountriesEffects {
  constructor(private dataService: CurrencyCountriesService, private actions$: Actions, private router: Router) { }

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CurrencyCountriesActions.loadCountriesRequestAction),
    switchMap(action => {
      return this.dataService.getCountries(action.id).pipe(
        map((countries: any) => {
          return CurrencyCountriesActions.loadSuccessAction({ countries })
        }),
        catchError(error => {
          return observableOf(CurrencyCountriesActions.loadFailureAction({ error }))
        })
      )
    })
  ))
}
