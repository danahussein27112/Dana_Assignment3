import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, concatMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { companyActionTypes } from '../Actions/company.actions';
import { CompanyService } from 'src/app/Modules/company/company.service';
import { Company } from 'src/app/Modules/company/company.model';

@Injectable()
export class CompanyEffects {

  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(companyActionTypes.loadCompaniesRequestAction),
      switchMap(companyAction => {
        return this.companyService.getAll().pipe(
          map((items: Company[]) => {
            return companyActionTypes.loadCompaniesSuccessAction({ items })
          }))
      })
    )
  );

  CreateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(companyActionTypes.createCompanyRequestAction),
    switchMap(action => {
      return this.companyService.create(action.items).pipe(
        map((items: any) => {
          return companyActionTypes.createCompanySuccessAction({ items })
        }), tap(() => this.router.navigateByUrl('/companies'))
        ,
        catchError(error => {
          return observableOf(companyActionTypes.createCompanyFailureAction({ error }))
        })
      )
    })
  ))
    ;
  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(companyActionTypes.deleteCompanyRequestAction),
      switchMap((action) => this.companyService.delete(action.id).pipe(
        map(() => {
          return companyActionTypes.deleteCompanySuccessAction()
        }) ,//tap(() => this.router.navigateByUrl('/companies'))
      )),

    ),
  );

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(companyActionTypes.updateCompanyRequestAction),
    switchMap(action => {
      return this.companyService.update(action.id, action.items).pipe(
        map((items: any) => {
          return companyActionTypes.updateCompanySuccessAction({ items })
        }), tap(() => this.router.navigateByUrl('/companies')),
        // catchError(error => {
        //   return observableOf(companyActionTypes.updateFailureAction({ error }))
        // })
      )
    })
  ))

  loadCompanyRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(companyActionTypes.loadCompanyRequestAction),
    switchMap(companyAction => {
      return this.companyService.getCompany(companyAction.id).pipe(
        map((company: any) => {
          return companyActionTypes.loadCompanySuccessAction({ company })
        }),
      )
    })
  ));
  constructor(private companyService: CompanyService,
    private actions$: Actions,
    private router: Router) { }
}