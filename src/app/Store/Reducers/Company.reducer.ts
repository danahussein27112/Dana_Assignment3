import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { AppState } from '.';
import { companyActionTypes } from '../Actions/company.actions';

export interface CompanyState {
  err: any;
  isLoading: boolean;
  item: Company[]
  combaniesLoaded : boolean;
  addedCompany:CompanyViewModel;
  selectedCompany:Company
}

export const initialState: CompanyState = {
  err:undefined,
  combaniesLoaded:false,
  isLoading:true,
  item:[],
  selectedCompany:{alias:'undefined',companyName:'undefined',country:undefined,id:0},
  addedCompany:{alias:'undefined',companyName:'undefined',countryId:0} 
};

export const companyReducer = createReducer(
  initialState,
  on(companyActionTypes.loadCompanies, (state)=> ({
    ...state,
    isLoading: true 
  })),
  on(companyActionTypes.companiesLoaded, (state,action) => ({
    ...state,
    combaniesLoaded: true,
    isLoading:false,
    item: action.items
})),
on(companyActionTypes.loadFailureAction, (state, { error }) => ({
  ...state,
  isLoading: false,
  error: error
})),
on(companyActionTypes.createCompany, (state ) => ({
  ...state,
  isLoading: true,
  error: null
})),
on(companyActionTypes.createSuccessAction, (state,action ) => ({
  ...state,
  isLoading: false,
  combaniesLoaded:true,
  addedCompany:action.items,
  error: null
})),
on(companyActionTypes.createFailureAction, (state, { error }) => ({
  ...state,
  isLoading: false,
  error: error
})), 
on(companyActionTypes.deleteCompany, (state) => ({
  ...state,
  combaniesLoaded: false,
})),
  on(companyActionTypes.deleteSuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
  })),
  on(companyActionTypes.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

on(companyActionTypes.updateCompany, (state ) => ({
  ...state,
  isLoading: true,
  error: null
})),
on(companyActionTypes.updateSuccessAction, (state, { item }) => ({
  ...state,
  isLoading: false,
  selectedCompany: item,
  error: null
})),

on(companyActionTypes.updateFailureAction, (state, { error }) => ({
  ...state,
  isLoading: false,
  error: error
})), 
on(companyActionTypes.loadCompanyRequestAction, (state, {id}) => ({
  ...state,
  isLoading: true ,
  id:state.selectedCompany.id
})),

on(companyActionTypes.loadCompanySuccessAction, (state, { company }) => ({
    ...state,
    isLoading: false,
    selectedCompany: company
})),

on(companyActionTypes.loadCompanyFailureAction, (state, { error }) => ({
  ...state,
  isLoading: false,
  error: error
})),

)