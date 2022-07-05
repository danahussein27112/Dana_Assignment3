import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { createSelector, select, Store } from "@ngrx/store";
import { companyActionTypes, loadCompanies } from "../Actions/company.actions";
import { AppState } from "../Reducers";
import {filter, first, tap} from 'rxjs/operators';
import { Observable } from "rxjs/internal/Observable";
import { getIsLoading } from "../Selectors/Company.selector";



@Injectable()
export class CompanyResolver implements Resolve<Observable<any>> {
  

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
return this.store
    .pipe(
        select(getIsLoading),
        tap((compainesLoaded) => {

          if (!compainesLoaded) {
 this.store.dispatch(companyActionTypes.loadCompanies()) ;
          }

        }),
        first()
    );

  }

}
