import { createAction, props } from "@ngrx/store";
import { Country } from "src/app/models/Country";

export const loadCountries = createAction('[Profile/Checkout-Address PageComponent] Load Countries');

export const loadCountriesSuccess = createAction(
  '[Countries Effects] Load Countries Success',
  props<{ countries: Country[] }>()
);

export const loadAddressesFailure = createAction(
  '[Countries Effects] Load Countries Failure',
  props<{ error: string }>()
);
