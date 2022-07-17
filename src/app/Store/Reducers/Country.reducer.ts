import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Country } from 'src/app/Modules/country/country.model';
import { CountryActions } from '../Actions/Country.actions';
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
  on(CountryActions.loadCountryRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(CountryActions.loadCountrySuccessAction, (state, { country }) => ({
      ...state,
      isLoading: false,
      selectedCountry: country
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
 
  on(CountryActions.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedCountry: item,
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
 
  on(CountryActions.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedCountry: item,
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