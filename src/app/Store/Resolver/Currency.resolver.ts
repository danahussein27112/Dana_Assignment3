import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../Reducers";
import { getCountryIsLoading } from "../Selectors/Country.selector";
import {filter, first, tap} from 'rxjs/operators';
import { getCurrencyIsLoading } from "../Selectors/Currency.selector";
import { CurrencyActions } from "../Actions/Currency.actions";

@Injectable()
export class CurrencyResolver implements Resolve<Observable<any>> {
  

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
return this.store
    .pipe(
        select(getCurrencyIsLoading),
        tap((currenciesLoaded) => {
          if (!currenciesLoaded) {
 this.store.dispatch(CurrencyActions.loadRequestAction()) ;
          }
        }),
        first()
    );

  }

}