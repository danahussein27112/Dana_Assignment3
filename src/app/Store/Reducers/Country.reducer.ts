import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
import { CountryActions } from '../Actions/Country.actions';
export interface CountryState {
    err: any;
    isLoading: boolean;
    item: Country[]
    countriesLoaded : boolean;
    selectedCountry:countryViewModel|undefined
    addedCountry:countryViewModel|undefined
  }
  
  export const initialState: CountryState = {
    err:undefined,
    countriesLoaded:false,
    isLoading:true,
    item:[],
  selectedCountry:undefined,
addedCountry:undefined}

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
 
  on(CountryActions.loadRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CountryActions.loadSuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      countriesLoaded:true,
item: action.items })),
 
  on(CountryActions.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CountryActions.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CountryActions.saveSuccessAction, (state,  action) => ({
    ...state,
    isLoading: false,
    addedCountry: action.item,
    error: null
  })),
 
  on(CountryActions.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CountryActions.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CountryActions.updateSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCountry: action.item,
    error: null
  })),
 
  on(CountryActions.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(CountryActions.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(CountryActions.deleteSuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
  })),
 
  on(CountryActions.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);