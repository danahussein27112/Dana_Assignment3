import { Action, createAction, props } from '@ngrx/store';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
 
export const loadCountryRequestAction = createAction(
  '[Country] Load Country Request',
  props<{ id: number }>()
);
 
export const loadCountrySuccessAction = createAction(
  '[Country] Load Country Success',
  props<{ country: Country }>()
);
 
export const loadCountryFailureAction = createAction(
  '[Country] Load Country Failure',
  props<{ error: string }>()
);
 
 
export const loadCountriesRequestAction = createAction(
  '[Country] Load countries Request'
);
 
export const loadCountriesFailureAction = createAction(
  '[Country] Load countries Failure',
  props<{ error: string }>()
);
 
export const loadCountriesSuccessAction = createAction(
  '[Country] Load countries Success',
  props<{ items: Country[] }>()
);
 

export const createCountryRequestAction = createAction(
  '[Country] Create Country request',
  props<{ item: countryViewModel }>()
);
 
export const createCountryFailureAction = createAction(
  '[Country] Create Country Failure',
  props<{ error: string }>()
);
 
export const createCountrySuccessAction = createAction(
  '[Country] Create country Success',
  props<{ item: Country }>()
);
 
///
 
export const updateCountryRequestAction = createAction(
  '[Country] Update Country request',
  props<{ item: countryViewModel ,id:number}>()
);
 
export const updateCountryFailureAction = createAction(
  '[Country] Update country Failure',
  props<{ error: string }>()
);
 
export const updateCountrySuccessAction = createAction(
  '[Country] Update country Success',
  props<{ item: Country }>()
);
   
 
export const deleteCountryRequestAction = createAction(
  '[Country] Delete Country request',
  props<{ id: number }>()
);
 
export const deleteCountryFailureAction = createAction(
  '[Country] Delete country Failure',
  props<{ error: string }>()
);
   
export const deleteCountrySuccessAction = createAction(
  '[Country] Delete country Success',
  props<{ id: number }>()
);
export const CountryActions = {
  loadCountryRequestAction,
  loadCountrySuccessAction,
  loadCountryFailureAction,
  loadCountriesRequestAction,
  loadCountriesFailureAction,
  loadCountriesSuccessAction,
  createCountryRequestAction,
  createCountryFailureAction,
  createCountrySuccessAction,
  updateCountryRequestAction,
  updateCountryFailureAction,
  updateCountrySuccessAction,
  deleteCountryRequestAction,
  deleteCountryFailureAction,
  deleteCountrySuccessAction,
};