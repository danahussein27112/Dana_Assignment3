import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';


export const loadCompaniesRequestAction = createAction(
  '[Companies] Load Companies Request',
);

export const loadCompaniesSuccessAction= createAction(
  '[Companies ] Companies Loaded Successfully',
  props<{items: Company[]}>()
);
export const loadCompainesFailureAction = createAction(
  '[Company ] Load Company Failure',
  props<{ error: string }>()
);
 

export const createCompanyRequestAction = createAction(
  '[Create Company ] Create Company Request',
  props<{items: CompanyViewModel}>()
);
export const createCompanyFailureAction = createAction(
'[Create Company ] Create Company Failure'
,  props<{ error: string }>()
);
 
export const createCompanySuccessAction = createAction(
  '[Create Company ] Create Company Success',
  props<{ items: Company }>()
);
export const deleteCompanyFailureAction = createAction(
  '[Delete Company ] Delete Company Failure',
  props<{ error: string }>()
);
   
export const deleteCompanySuccessAction = createAction(
  '[Delete Company ] Delete Company Success',
);

export const deleteCompanyRequestAction = createAction(
  ' Delete Company request',
  props<{id: number}>()
);

export const updateCompanyRequestAction = createAction(
  'Update Company request',
  props<{items: CompanyViewModel,id:number}>()
);
export const updateCompanyFailureAction = createAction(
  ' Update Company Failure',
  props<{ error: string }>()
);
 
export const updateCompanySuccessAction = createAction(
  'Update Company Success',
  props<{ items: Company }>()
);
export const loadCompanyRequestAction = createAction(
  'get Company request',
  props<{ id: number|any }>()
);
 
export const loadCompanySuccessAction = createAction(
  ' get Company Success',
  props<{ company:Company }>()
);
 
export const loadCompanyFailureAction = createAction(
  'get Company failure',
  props<{ error: string }>()
);

export const companyActionTypes = {
  loadCompaniesRequestAction,
  loadCompaniesSuccessAction,
  loadCompanyFailureAction,
  loadCompanyRequestAction,
  loadCompainesFailureAction,
  loadCompanySuccessAction,
  createCompanyRequestAction,
  createCompanyFailureAction,
  createCompanySuccessAction,
  deleteCompanyRequestAction,
  deleteCompanyFailureAction,
  deleteCompanySuccessAction,
  updateCompanyRequestAction,
  updateCompanyFailureAction,
  updateCompanySuccessAction
};