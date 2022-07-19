import { createSelector, createFeatureSelector, createReducer } from '@ngrx/store';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { CompanyState } from '../Reducers/Company.reducer';

export const getState = createFeatureSelector<CompanyState>('company'); 
export const getAllCompanies = createSelector(
  getState,
  (state: CompanyState) => state.item
);
export const getCompany = createSelector(
  getState,
  (state: CompanyState, id: number) => state.item.filter((x: { id: number; })=> x.id === id)
);
  export const getCompanyDetail=(props:{id:number})=>
  createSelector(getState,(state :CompanyState)=> state.selectedCompany);
 
export const getSelected = createSelector(
  getState,
    (state: CompanyState) => state.combaniesLoaded
);
 
export const getError = createSelector(
  getState,
  (state: CompanyState) => state.err
);
 
export const getIsLoading = createSelector(
  getState,
  (state: CompanyState) => state.isLoading
);
