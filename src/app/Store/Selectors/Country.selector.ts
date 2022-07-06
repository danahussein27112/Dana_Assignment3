import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "src/app/Modules/country/country.model";
import { AppState } from "../Reducers";
import { CountryState } from "../Reducers/Country.reducer";

export const getState = createFeatureSelector<CountryState>('country'); 
export const getCountries = createSelector(
  getState,
  (state: CountryState) => state.item
);
 
export const getCountry = createSelector(
  getState,
  (state: CountryState, id: number) => state.item.filter((x: { id: number; })=> x.id === id)
);
 
export const getSelectedCountry = createSelector(
  getState,
    (state: CountryState) => state.item
);
 
export const getCountryError = createSelector(
  getState,
  (state: CountryState) => state.err
);
 
export const getCountryIsLoading = createSelector(
  getState,
  (state: CountryState) => state.isLoading
);