// import { Action, createAction, props } from '@ngrx/store';
// import { Currency } from 'src/app/Modules/currency/currency.model';
 
// export enum currencyActionTypes {
//   LOAD_CURRENCY_REQUEST = '[Currency] Load Currency Request',
//   LOAD_CURRENCY_FAILURE = '[Currency] Load Currency Failure',
//   LOAD_CURRENCY_SUCCESS = '[Currency] Load Currency Success',
 
//   LOAD_REQUEST = '[Currency] Load Request',
//   LOAD_FAILURE = '[Currency] Load Failure',
//   LOAD_SUCCESS = '[Currency] Load Success',
 
//   SAVE_REQUEST = '[Currency] Save',
//   SAVE_FAILURE = '[Currency] Save Failure',
//   SAVE_SUCCESS = '[Currency] Save Success',
 
//   UPDATE_REQUEST = '[Currency] Update',
//   UPDATE_FAILURE = '[Currency] Update Failure',
//   UPDATE_SUCCESS = '[Currency] Update Success',
 
//   DELETE_REQUEST = '[Currency] Delete',
//   DELETE_FAILURE = '[Currency] Delete Failure',
//   DELETE_SUCCESS = '[Currency] Delete Success'
// }
// export const loadCurrencyRequestAction = createAction(
//   currencyActionTypes.LOAD_CURRENCY_REQUEST,
//   props<{ id: number }>()
// );
 
// export const loadCurrencySuccessAction = createAction(
//   currencyActionTypes.LOAD_CURRENCY_FAILURE,
//   props<{ country: Currency }>()
// );
 
// export const loadCurrencyFailureAction = createAction(
//   currencyActionTypes.LOAD_CURRENCY_SUCCESS,
//   props<{ error: string }>()
// );
 
// ///////
 
// export const loadRequestAction = createAction(
//   currencyActionTypes.LOAD_REQUEST
// );
 
// export const loadFailureAction = createAction(
//   currencyActionTypes.LOAD_FAILURE,
//   props<{ error: string }>()
// );
 
// export const loadSuccessAction = createAction(
//   currencyActionTypes.LOAD_SUCCESS,
//   props<{ items: Currency[] }>()
// );
 
// ////////
 
// export const saveRequestAction = createAction(
//   currencyActionTypes.SAVE_REQUEST,
//   props<{ item: Currency }>()
// );
 
// export const saveFailureAction = createAction(
//   currencyActionTypes.SAVE_FAILURE,
//   props<{ error: string }>()
// );
 
// export const saveSuccessAction = createAction(
//   currencyActionTypes.SAVE_SUCCESS,
//   props<{ item: Currency }>()
// );
 
// ///
 
// export const updateRequestAction = createAction(
//   currencyActionTypes.UPDATE_REQUEST,
//   props<{ item: Currency }>()
// );
 
// export const updateFailureAction = createAction(
//   currencyActionTypes.UPDATE_FAILURE,
//   props<{ error: string }>()
// );
 
// export const updateSuccessAction = createAction(
//   currencyActionTypes.UPDATE_SUCCESS,
//   props<{ item: Currency }>()
// );
   
// ////
 
// export const deleteRequestAction = createAction(
//   currencyActionTypes.DELETE_REQUEST,
//   props<{ id: number }>()
// );
 
// export const deleteFailureAction = createAction(
//   currencyActionTypes.DELETE_FAILURE,
//   props<{ error: string }>()
// );
   
// export const deleteSuccessAction = createAction(
//   currencyActionTypes.DELETE_SUCCESS,
//   props<{ id: number }>()
// );
// export const CurrencyActions = {
//   loadCurrencyRequestAction,
//   loadCurrencySuccessAction,
//   loadCurrencyFailureAction,
//   loadRequestAction,
//   loadFailureAction,
//   loadSuccessAction,
//   saveRequestAction,
//   saveFailureAction,
//   saveSuccessAction,
//   updateRequestAction,
//   updateFailureAction,
//   updateSuccessAction,
//   deleteRequestAction,
//   deleteFailureAction,
//   deleteSuccessAction,
// };