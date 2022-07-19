import { Action, createAction, props } from '@ngrx/store';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
 
export enum countryActionTypes {
  LOAD_COUNTRY_REQUEST = '[Country] Load Country Request',
  LOAD_COUNTRY_FAILURE = '[Country] Load Country Failure',
  LOAD_COUNTRY_SUCCESS = '[Country] Load Country Success',
 
  LOAD_REQUEST = '[Country] Load Request',
  LOAD_FAILURE = '[Country] Load Failure',
  LOAD_SUCCESS = '[Country] Load Success',
 
  SAVE_REQUEST = '[Country] Save',
  SAVE_FAILURE = '[Country] Save Failure',
  SAVE_SUCCESS = '[Country] Save Success',
 
  UPDATE_REQUEST = '[Country] Update',
  UPDATE_FAILURE = '[Country] Update Failure',
  UPDATE_SUCCESS = '[Country] Update Success',
 
  DELETE_REQUEST = '[Country] Delete',
  DELETE_FAILURE = '[Country] Delete Failure',
  DELETE_SUCCESS = '[Country] Delete Success'
}
export const loadCountryRequestAction = createAction(
  countryActionTypes.LOAD_COUNTRY_REQUEST,
  props<{ id: number }>()
);
 
export const loadCountrySuccessAction = createAction(
  countryActionTypes.LOAD_COUNTRY_FAILURE,
  props<{ country: countryViewModel }>()
);
 
export const loadCountryFailureAction = createAction(
  countryActionTypes.LOAD_COUNTRY_SUCCESS,
  props<{ error: string }>()
);
 
///////
 
export const loadRequestAction = createAction(
  countryActionTypes.LOAD_REQUEST
);
 
export const loadFailureAction = createAction(
  countryActionTypes.LOAD_FAILURE,
  props<{ error: string }>()
);
 
export const loadSuccessAction = createAction(
  countryActionTypes.LOAD_SUCCESS,
  props<{ items: Country[] }>()
);
 
////////
 
export const saveRequestAction = createAction(
  countryActionTypes.SAVE_REQUEST,
  props<{ item: countryViewModel }>()
);
 
export const saveFailureAction = createAction(
  countryActionTypes.SAVE_FAILURE,
  props<{ error: string }>()
);
 
export const saveSuccessAction = createAction(
  countryActionTypes.SAVE_SUCCESS,
  props<{ item: countryViewModel }>()
);
 
///
 
export const updateRequestAction = createAction(
  countryActionTypes.UPDATE_REQUEST,
  props<{ item: countryViewModel ,id:number}>()
);
 
export const updateFailureAction = createAction(
  countryActionTypes.UPDATE_FAILURE,
  props<{ error: string }>()
);
 
export const updateSuccessAction = createAction(
  countryActionTypes.UPDATE_SUCCESS,
  props<{ item: countryViewModel }>()
);
   
////
 
export const deleteRequestAction = createAction(
  countryActionTypes.DELETE_REQUEST,
  props<{ id: number }>()
);
 
export const deleteFailureAction = createAction(
  countryActionTypes.DELETE_FAILURE,
  props<{ error: string }>()
);
   
export const deleteSuccessAction = createAction(
  countryActionTypes.DELETE_SUCCESS,
  props<{ id: number }>()
);
export const CountryActions = {
  loadCountryRequestAction,
  loadCountrySuccessAction,
  loadCountryFailureAction,
  loadRequestAction,
  loadFailureAction,
  loadSuccessAction,
  saveRequestAction,
  saveFailureAction,
  saveSuccessAction,
  updateRequestAction,
  updateFailureAction,
  updateSuccessAction,
  deleteRequestAction,
  deleteFailureAction,
  deleteSuccessAction,
};