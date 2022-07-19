import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "src/app/Modules/country/country.model";
import { AppState } from "../Reducers";
import { CurrencyState } from "../Reducers/Currency.reducer";

export const getState = createFeatureSelector<CurrencyState>('currency'); 
export const getCurrencies = createSelector(
  getState,
  (state: CurrencyState) => state.item
);
 
export const getCurrency = createSelector(
  getState,
  (state: CurrencyState, id: number) => state.item.filter((x=>x.id === id)
));
export const getCurrencyDetail=(props:{id:number})=>
createSelector(getState,(state :CurrencyState)=> state.selectedCurrency);

export const getSelectedCurrency = createSelector(
  getState,
    (state: CurrencyState) => state.item
);
 
export const getCurrencyError = createSelector(
  getState,
  (state: CurrencyState) => state.err
);
 
export const getCurrencyIsLoading = createSelector(
  getState,
  (state: CurrencyState) => state.isLoading
);