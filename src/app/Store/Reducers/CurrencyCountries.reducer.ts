import { createReducer, on } from '@ngrx/store';
import { currencyCountreis } from "src/app/Modules/CurrencyCountries/currencyCountries.model";
import { CurrencyCountriesActions } from '../Actions/currencyCountries';

export interface CurrencyCountriesState {
  err: any;
  isLoading: boolean;
  countries: currencyCountreis[]
  Loaded: boolean;
}

export const initialState: CurrencyCountriesState = {
  err: undefined,
  isLoading: true,
  countries: [],
  Loaded: false
}
export const CurrencyCountriesReducer = createReducer(
  initialState,
  on(CurrencyCountriesActions.loadCountriesRequestAction, (state, { id }) => ({
    ...state,
    isLoading: true
  })),

  on(CurrencyCountriesActions.loadSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    Loaded: true,
    countries: action.countries
  })),

  on(CurrencyCountriesActions.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })));