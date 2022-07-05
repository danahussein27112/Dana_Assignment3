// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { Country } from "src/app/Modules/country/country.model";
// import { AppState } from "../Reducers";
// import { State } from "../Reducers/Country.reducer";
// export interface CountryState {
//   selectedCountry: Country,
//   countries: Country[],  
//   isLoading?: boolean; 
//   error?: any;
// }
// export const getState = createFeatureSelector<CountryState>('country'); 
// export const getCountries = createSelector(
//   getState,
//   (state: CountryState) => state.countries
// );
 
// export const getCountry = createSelector(
//   getState,
//   (state: CountryState, id: number) => state.countries.filter((x: { id: number; })=> x.id === id)
// );
 
// export const getSelectedCountry = createSelector(
//   getState,
//     (state: CountryState) => state.selectedCountry
// );
 
// export const getCountryError = createSelector(
//   getState,
//   (state: CountryState) => state.error
// );
 
// export const getCountryIsLoading = createSelector(
//   getState,
//   (state: CountryState) => state.isLoading
// );