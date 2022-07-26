import { createReducer, on } from '@ngrx/store';
import { Company } from 'src/app/Modules/company/company.model';
import { companyActionTypes } from '../Actions/company.actions';

export interface CompanyState {
  err: any;
  isLoading: boolean;
  items: Company[];
  isLoaded: boolean;
  selectedCompany: Company | undefined
  selectedId: number
}

export const initialState: CompanyState = {
  err: undefined,
  isLoaded: false,
  isLoading: true,
  items: [],
  selectedCompany: undefined,
  selectedId: 0,
};

export const companyReducer = createReducer(
  initialState,
  on(companyActionTypes.loadCompaniesRequestAction, (state) => ({
    ...state,
    isLoading: true
  })),
  on(companyActionTypes.loadCompaniesSuccessAction, (state, action) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
    items: action.items
  })),
  on(companyActionTypes.loadCompainesFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    err: action.error
  })),
  on(companyActionTypes.createCompanyRequestAction, (state) => ({
    ...state,
    isLoading: true,
    err: null
  })),
  on(companyActionTypes.createCompanySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    selectedCompany: action.items,
    error: null
  })),
  on(companyActionTypes.createCompanyFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    err: action.error
  })),
  on(companyActionTypes.deleteCompanyRequestAction, (state, action) => {
    const deletedCompanyId = state.selectedId;
    const companyItems: Company[] = Object.assign([], state.items);
    const Index = companyItems.findIndex(x => x.id === deletedCompanyId);
    companyItems.splice(Index,1);

    ;
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      error: null
    };
  }),
  on(companyActionTypes.deleteCompanySuccessAction, (state) => {
    const deletedCompanyId = state.selectedId;
    const companyItems: Company[] = Object.assign([], state.items);
    const Index = companyItems.findIndex(x => x.id === deletedCompanyId)
    companyItems.forEach((element, index) => {
      if (element.id == deletedCompanyId) {
        companyItems.splice(index, 1);
      }
    });
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      error: null
    };
  }),
  on(companyActionTypes.deleteCompanyFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    err: action.error
  })),

  on(companyActionTypes.updateCompanyRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
    selectedId: action.id
  })),

  on(companyActionTypes.updateCompanySuccessAction, (state, action) => {
    const updatedCompanyId = state.selectedId;
    const updatedCompany = action.items;
    const companyItems: Company[] = Object.assign([], state.items);
    const index = companyItems.findIndex(x => x.id === updatedCompanyId)
    companyItems[index] = updatedCompany;
    return {
      ...state,
      isLoading: false,
      addedCompany: action.items,
      error: null
    };
  }),

  on(companyActionTypes.updateCompanyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
  on(companyActionTypes.loadCompanyRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
    selectedId: action.id,
  })),

  on(companyActionTypes.loadCompanySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCompany: action.company
  })),

  on(companyActionTypes.loadCompanyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),


)