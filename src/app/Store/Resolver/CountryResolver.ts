import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CountryActions } from "../Actions/Country.actions";
import { AppState } from "../Reducers";
import { getCountryIsLoading } from "../Selectors/Country.selector";
import {filter, first, tap} from 'rxjs/operators';

@Injectable()
export class CountryResolver implements Resolve<Observable<any>> {
  

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
return this.store
    .pipe(
        select(getCountryIsLoading),
        tap((countriesLoaded) => {
          if (!countriesLoaded) {
 this.store.dispatch(CountryActions.loadRequestAction()) ;
          }
        }),
        first()
    );

  }

}