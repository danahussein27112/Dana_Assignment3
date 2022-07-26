import { createReducer, on } from '@ngrx/store';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CurrencyActions } from '../Actions/Currency.actions';
export interface CurrencyState {
  err: any;
  isLoading: boolean;
  item: Currency[]
  CurrencyLoaded: boolean;
  selectedCurrency: Currency | undefined
  selectedId:number 
}

export const initialState: CurrencyState = {
  err: undefined,
  CurrencyLoaded: false,
  isLoading: true,
  item: [],
  selectedCurrency: undefined,
  selectedId:0
  
}

export const CurrencyReducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrencyRequestAction, (state, { id }) => ({
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

  on(CurrencyActions.loadCurrenciesRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CurrencyActions.loadCurrenciesSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    item: action.items
  })),

  on(CurrencyActions.loadCurrenciesFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CurrencyActions.createCurrencyRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CurrencyActions.createCurrencySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCurrency: action.item,
    error: null
  })),

  on(CurrencyActions.createCurrencyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CurrencyActions.updateCurrencyRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CurrencyActions.updateCurrencySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCurrency: action.item,
    error: null
  })),

  on(CurrencyActions.updateCurrencyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CurrencyActions.deleteCurrencyRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CurrencyActions.deleteCurrencySuccessAction, (state) => {
    const deletedCompanyId = state.selectedId;
    const companyItems :Currency[] = Object.assign([], state.item);
    const Index = companyItems.findIndex(x => x.id === deletedCompanyId)
    companyItems.forEach((element, Index) => {
      if(element.id == deletedCompanyId) {
          companyItems.splice(Index);     
      }
  });
    return {
      ...state,
      isLoading: false,
      isLoaded:true,
      error: null
    };
  }),
  on(CurrencyActions.deleteCurrencyFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);