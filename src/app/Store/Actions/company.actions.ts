import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';


export const loadCompanies = createAction(
  '[Companies] Load Companies via Service',
);

export const companiesLoaded = createAction(
  '[Companies Effect] Companies Loaded Successfully',
  props<{items: Company[]}>()
);
export const loadFailureAction = createAction(
  '[Company ] Load Country Failure',
  props<{ error: string }>()
);
 

export const createCompany = createAction(
  '[Create Company Component] Create Company',
  props<{items: CompanyViewModel}>()
);
export const createFailureAction = createAction(
'[Create Company Component] Create Failure'
,  props<{ error: string }>()
);
 
export const createSuccessAction = createAction(
  '[Create Company Component] Create Success',
  props<{ items: CompanyViewModel }>()
);
export const deleteFailureAction = createAction(
  '[Delete Company Component] Delete Failure',
  props<{ error: string }>()
);
   
export const deleteSuccessAction = createAction(
  '[Delete Company Component] Delete Success',
  props<{ id: number }>()
);

export const deleteCompany = createAction(
  '[Companies List Operations] Delete Company',
  props<{id: number}>()
);

export const updateCompany = createAction(
  '[Companies List Operations] Update Company',
  props<{items: CompanyViewModel,id:number}>()
);
export const updateFailureAction = createAction(
  '[Companies List Operations] Update Company Failure',
  props<{ error: string }>()
);
 
export const updateSuccessAction = createAction(
  '[Companies List Operations] Update Company Success',
  props<{ items: CompanyViewModel }>()
);
export const loadCompanyRequestAction = createAction(
  '[company get Company request]',
  props<{ id: number }>()
);
 
export const loadCompanySuccessAction = createAction(
  '[company] get Company Success]',
  props<{ company:Company }>()
);
 
export const loadCompanyFailureAction = createAction(
  '[Company] get Company failed]',
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