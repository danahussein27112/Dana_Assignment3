import { createSelector, createFeatureSelector, createReducer } from '@ngrx/store';
import { CompanyState } from '../Reducers/Company.reducer';

export const getState = createFeatureSelector<CompanyState>('company');
export const getAllCompanies = createSelector(
  getState,
  (state: CompanyState) => state.items
);
export const getCompany = createSelector(
  getState,
  (state: CompanyState, id: number) => state.items.filter((x: { id: number; }) => x.id === id)
);
export const getCompanyDetail = (props: { id: number }) =>
  createSelector(getState, (state: CompanyState) => state.selectedCompany);

export const getSelected = createSelector(
  getState,
  (state: CompanyState) => state.isLoaded
);

export const getError = createSelector(
  getState,
  (state: CompanyState) => state.err
  
);

export const getIsLoading = createSelector(
  getState,
  (state: CompanyState) => state.isLoading
);
