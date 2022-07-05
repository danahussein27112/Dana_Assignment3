import { createSelector, createFeatureSelector, createReducer } from '@ngrx/store';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyState } from '../Reducers/Company.reducer';

export const getState = createFeatureSelector<CompanyState>('company'); 
export const getAllCompanies = createSelector(
  getState,
  (state: CompanyState) => state.item
);
 
export const getCompany = createSelector(
  getState,
  (state: CompanyState, id: number) => state.item.filter(x=> x.id === id)
);
 
export const getSelected = createSelector(
  getState,
    (state: CompanyState) => state.selectedCompany
);
 
export const getError = createSelector(
  getState,
  (state: CompanyState) => state.err
);
 
export const getIsLoading = createSelector(
  getState,
  (state: CompanyState) => state.isLoading
);