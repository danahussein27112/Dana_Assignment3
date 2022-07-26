import { createAction, props } from "@ngrx/store";
import { currencyCountreis } from "src/app/Modules/CurrencyCountries/currencyCountries.model";

export const loadCountriesRequestAction = createAction(
    '[ get currency Countries request]',
    props<{ id: number }>()
  );
   
  export const loadSuccessAction = createAction(
    ' get currency Countries Success',
    props<{ countries:currencyCountreis[] }>()
  );
   
  export const loadFailureAction = createAction(
    ' get currency Countries failed',
    props<{ error: string }>()
  );
  export const CurrencyCountriesActions = {
    loadCountriesRequestAction,
    loadFailureAction,
    loadSuccessAction
  }
