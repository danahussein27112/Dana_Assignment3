import { Action, createAction, props } from '@ngrx/store';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
 

export enum currencyActionTypes {
  loadCurrenciesRequestAction
}
export const loadCurrencyRequestAction = createAction(
 ' [Currency] Load Currency Request',
  props<{ id: number }>()
);
 
export const loadCurrencySuccessAction = createAction(
  '[Currency] Load Currency Success',
  props<{ currency: Currency }>()
);
 
export const loadCurrencyFailureAction = createAction(
  '[Currency] Load Currency Failure',
  props<{ error: string }>()
);
 
 
export const loadCurrenciesRequestAction = createAction(
  'Load Currencies Request'
);
 
export const loadCurrenciesFailureAction = createAction(
  '[Currency] Load Currencies Failure',
  props<{ error: string }>()
);
 
export const loadCurrenciesSuccessAction = createAction(
  '[Currency] Load Currencies  Success',
  props<{ items: Currency[] }>()
);
 
export const createCurrencyRequestAction = createAction(
  '[Currency] Create Currency  Request',
  props<{ item: CurrencyViewModel }>()
);
 
export const createCurrencyFailureAction = createAction(
  '[Currency] create currency failure',
  props<{ error: string }>()
);
 
export const createCurrencySuccessAction = createAction(
  '[Currency] Create Currency Success',
  props<{ item: Currency }>()
);

export const updateCurrencyRequestAction = createAction(
  '[Currency] Update Currency Success',
  props<{ item: CurrencyViewModel,id:number }>()
);
 
export const updateCurrencyFailureAction = createAction(
  '[Currency] Update Currency Success',
  props<{ error: string }>()
);
 
export const updateCurrencySuccessAction = createAction(
  '[Currency] Update Currency Success',
  props<{ item: Currency}>()
);
   

 
export const deleteCurrencyRequestAction = createAction(
  '[Currency] Delete Currency Request',
  props<{ id: number }>()
);
 
export const deleteCurrencyFailureAction = createAction(
  '[Currency] Delete Currency failure',
  props<{ error: string }>()
);
   
export const deleteCurrencySuccessAction = createAction(
  '[Currency] Delete Currency Success',
  props<{ id: number }>()
);
export const CurrencyActions = {
  loadCurrencyRequestAction,
  loadCurrencySuccessAction,
  loadCurrencyFailureAction,
  loadCurrenciesRequestAction,
  loadCurrenciesFailureAction,
  loadCurrenciesSuccessAction,
  createCurrencyRequestAction,
  createCurrencyFailureAction,
  createCurrencySuccessAction,
  updateCurrencyRequestAction,
  updateCurrencyFailureAction,
  updateCurrencySuccessAction,
  deleteCurrencyRequestAction,
  deleteCurrencyFailureAction,
  deleteCurrencySuccessAction,
};