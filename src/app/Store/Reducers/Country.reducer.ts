// import { EntityState } from '@ngrx/entity';
// import { createReducer, on } from '@ngrx/store';
// import { Country } from 'src/app/Modules/country/country.model';
// import * as countryActions from '../Actions/Country.actions';
// //import { adapter } from './Company.reducer';

// export const ENTITY_FEATURE_KEY = "country";
// export interface State extends EntityState<Country> {
//   loaded: boolean;
//   error?: Error | any;
// }

// // //export const initialState = adapter.getInitialState({
// //   // Additional entity state properties
// //   loaded: false,
// //   err :undefined
// // });
// export const countryReducer = createReducer()
//  // initialState,
//   on(countryActions.loadCountryRequestAction, (state, {id}) => ({
//     ...state,
//     isLoading: true 
//   })),
 
//   on(countryActions.loadCountrySuccessAction, (state, { country }) => ({
//       ...state,
//       isLoading: false,
//       selectedCountry: country
//   })),
 
//   on(countryActions.loadCountryFailureAction, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error: error
//   })),
 
//   on(countryActions.loadRequestAction, state => ({
//     ...state,
//     isLoading: true 
//   })),
 
//   on(countryActions.loadSuccessAction, (state, { items }) => ({
//       ...state,
//       isLoading: false,
//       countries: items
//   })),
 
//   on(countryActions.loadFailureAction, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error: error
//   })), 
 
//   on(countryActions.saveRequestAction, state => ({
//     ...state,
//     isLoading: true 
//   })),
 
//   on(countryActions.saveSuccessAction, (state, { item }) => ({
//     ...state,
//     isLoading: false,
//     selectedCountry: item,
//     error: null
//   })),
 
//   on(countryActions.saveFailureAction, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error: error
//   })), 
 
//   on(countryActions.updateRequestAction, state => ({
//     ...state,
//     isLoading: true 
//   })),
 
//   on(countryActions.updateSuccessAction, (state, { item }) => ({
//     ...state,
//     isLoading: false,
//     selectedCountry: item,
//     error: null
//   })),
 
//   on(countryActions.updateFailureAction, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error: error
//   })), 
 
//   on(countryActions.deleteRequestAction, state => ({
//     ...state,
//     isLoading: true 
//   })),
 
//   on(countryActions.deleteSuccessAction, (state, { id }) => ({
//     ...state,
//     isLoading: false,
//   })),
 
//   on(countryActions.deleteFailureAction, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error: error
//   }))
// );