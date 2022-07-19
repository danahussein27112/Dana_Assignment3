import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { companyActionTypes } from '../Actions/company.actions';
import { CompanyService } from 'src/app/Modules/company/company.service';
import { Company } from 'src/app/Modules/company/company.model';

@Injectable()
export class CompanyEffects {
  
  loadCompanies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(companyActionTypes.loadCompanies),
    switchMap(companyAction=>{
      return this.companyService.getAll().pipe(map
        ((items:Company[])=> {
          return companyActionTypes.companiesLoaded({items})
        }))
    })
    

  )
  );

  createCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(companyActionTypes.createCompany),
      concatMap((action) => this.companyService.create(action.items)),
      tap(() => this.router.navigateByUrl('/companies'))
    ),
    {dispatch: false}
  );

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(companyActionTypes.deleteCompany),
      concatMap((action) => this.companyService.delete(action.id)),
      tap(() => this.router.navigateByUrl('/companies'))

    ),
    {dispatch: false}
  );

  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(companyActionTypes.updateCompany),
    switchMap(action => {
      return this.companyService.update(action.id,action.items).pipe(
          map((items: any,id:number) => {
              return companyActionTypes.updateSuccessAction({ items })
          }),      tap(() => this.router.navigateByUrl('/companies'))
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




  constructor(private companyService: CompanyService, private actions$: Actions, private router: Router) {}
}