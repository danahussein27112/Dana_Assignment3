import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
import { CountryActions } from '../Actions/Country.actions';
export interface CountryState {
  err: any;
  isLoading: boolean;
  item: Country[]
  countriesLoaded: boolean;
  selectedCountry: Country | undefined
}

export const initialState: CountryState = {
  err: undefined,
  countriesLoaded: false,
  isLoading: true,
  item: [],
  selectedCountry: undefined,
}

export const countryReducer = createReducer(
  initialState,
  on(CountryActions.loadCountryRequestAction, (state) => ({
    ...state,
    isLoading: true
  })),

  on(CountryActions.loadCountrySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCountry: action.country
  })),

  on(CountryActions.loadCountryFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CountryActions.loadCountryRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CountryActions.loadCountriesSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    countriesLoaded: true,
    item: action.items
  })),

  on(CountryActions.loadCountriesFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CountryActions.createCountryRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CountryActions.createCountrySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCountry: action.item,
    error: null
  })),

  on(CountryActions.createCountryFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CountryActions.updateCountryRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CountryActions.updateCountrySuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCountry: action.item,
    error: null
  })),

  on(CountryActions.updateCountryFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(CountryActions.deleteCountryRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(CountryActions.deleteCountrySuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
  })),

  on(CountryActions.deleteCountryFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);