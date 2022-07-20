import { createReducer, on } from '@ngrx/store';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CurrencyActions } from '../Actions/Currency.actions';
export interface CurrencyState {
    err: any;
    isLoading: boolean;
    item: Currency[]
    CurrencyLoaded : boolean;
    selectedCurrency:CurrencyViewModel|undefined
  }
  
  export const initialState: CurrencyState = {
    err:undefined,
    CurrencyLoaded:false,
    isLoading:true,
    item:[],
  selectedCurrency:undefined}

export const CurrencyReducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrencyRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(CurrencyActions.loadCurrencySuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      selectedCurrency: action.currency
  })),
 
  on(CurrencyActions.loadCurrencyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(CurrencyActions.loadRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CurrencyActions.loadSuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      item: action.items
  })),
 
  on(CurrencyActions.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CurrencyActions.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CurrencyActions.saveSuccessAction, (state,  action) => ({
    ...state,
    isLoading: false,
    selectedCurrency: action.item,
    error: null
  })),
 
  on(CurrencyActions.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CurrencyActions.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CurrencyActions.updateSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCurrency: action.item,
    error: null
  })),
 
  on(CurrencyActions.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CurrencyActions.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CurrencyActions.deleteSuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
  })),
 
  on(CurrencyActions.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);