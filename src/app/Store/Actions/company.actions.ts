import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';


export const loadCompanies = createAction(
  '[Companies] Load Companies via Service',
);

export const companiesLoaded = createAction(
  '[Companies ] Companies Loaded Successfully',
  props<{items: Company[]}>()
);
export const loadFailureAction = createAction(
  '[Company ] Load Company Failure',
  props<{ error: string }>()
);
 

export const createCompany = createAction(
  '[Create Company ] Create Company',
  props<{items: CompanyViewModel}>()
);
export const createFailureAction = createAction(
'[Create Company ] Create Failure'
,  props<{ error: string }>()
);
 
export const createSuccessAction = createAction(
  '[Create Company ] Create Success',
  props<{ items: CompanyViewModel }>()
);
export const deleteFailureAction = createAction(
  '[Delete Company ] Delete Failure',
  props<{ error: string }>()
);
   
export const deleteSuccessAction = createAction(
  '[Delete Company ] Delete Success',
  props<{ id: number }>()
);

export const deleteCompany = createAction(
  ' Delete Company',
  props<{id: number}>()
);

export const updateCompany = createAction(
  'Update Company',
  props<{items: CompanyViewModel,id:number}>()
);
export const updateFailureAction = createAction(
  ' Update Company Failure',
  props<{ error: string }>()
);
 
export const updateSuccessAction = createAction(
  'Update Company Success',
  props<{ items: CompanyViewModel }>()
);
export const loadCompanyRequestAction = createAction(
  '[get Company request]',
  props<{ id: number }>()
);
 
export const loadCompanySuccessAction = createAction(
  ' get Company Success',
  props<{ company:Company }>()
);
 
export const loadCompanyFailureAction = createAction(
  'get Company failed',
  props<{ error: string }>()
);

export const companyActionTypes = {
  loadCompanies,
  companiesLoaded,
  loadFailureAction,
  loadCompanyRequestAction,
  loadCompanyFailureAction,
  loadCompanySuccessAction,
  createCompany,
  createFailureAction,
  createSuccessAction,
  deleteCompany,
  deleteFailureAction,
  deleteSuccessAction,
  updateCompany,
  updateFailureAction,
  updateSuccessAction
};