import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CurrencyCountriesState } from "../Reducers/CurrencyCountries.reducer";

export const getState = createFeatureSelector<CurrencyCountriesState>('currencyCountries');
export const getCountries = () =>
  createSelector(getState, (state: CurrencyCountriesState) => state.countries);

export const getCountryError = createSelector(
  getState,
  (state: CurrencyCountriesState) => state.err
);

export const getCountryIsLoading = createSelector(
  getState,
  (state: CurrencyCountriesState) => state.isLoading
);