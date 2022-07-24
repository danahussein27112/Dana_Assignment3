import { createAction, props } from "@ngrx/store";
import { currencyCountreis } from "src/app/Modules/CurrencyCountries/currencyCountries.model";

export const loadCountriesRequestAction = createAction(
    '[ get Countries request]',
    props<{ id: number }>()
  );
   
  export const loadSuccessAction = createAction(
    'Success',
    props<{ countries:currencyCountreis[] }>()
  );
   
  export const loadFailureAction = createAction(
    'failed',
    props<{ error: string }>()
  );
  export const CurrencyCountriesActions = {
    loadCountriesRequestAction,
    loadFailureAction,
    loadSuccessAction
  }
