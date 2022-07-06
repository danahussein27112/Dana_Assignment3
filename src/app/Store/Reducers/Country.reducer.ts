import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/Modules/country/country.model';
import * as countryActions from '../Actions/Country.actions';
export interface CountryState {
    err: any;
    isLoading: boolean;
    item: Country[]
    countriesLoaded : boolean;
    //selectedCountry:Country
  }
  
  export const initialState: CountryState = {
    err:undefined,
    countriesLoaded:false,
    isLoading:true,
    item:[]}

export const countryReducer = createReducer(
  initialState,
  on(countryActions.loadCountryRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(countryActions.loadCountrySuccessAction, (state, { country }) => ({
      ...state,
      isLoading: false,
      selectedCountry: country
  })),
 
  on(countryActions.loadCountryFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(countryActions.loadRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(countryActions.loadSuccessAction, (state, { items }) => ({
      ...state,
      isLoading: false,
      countries: items
  })),
 
  on(countryActions.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(countryActions.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(countryActions.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedCountry: item,
    error: null
  })),
 
  on(countryActions.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(countryActions.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(countryActions.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedCountry: item,
    error: null
  })),
 
  on(countryActions.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(countryActions.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(countryActions.deleteSuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
  })),
 
  on(countryActions.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);