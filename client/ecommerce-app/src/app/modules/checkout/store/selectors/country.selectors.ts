import { createSelector } from "@ngrx/store";
import { selectCheckoutState } from "..";
import * as fromCountries from '../reducers/country.reducer';

export const selectCountriesState = createSelector(
  selectCheckoutState,
  (state) => state.country
)


export const selectCountries = createSelector(
  selectCountriesState,
  fromCountries.getCountries
);

export const selectCountriesError = createSelector(
  selectCountriesState,
  fromCountries.getError
);

export const selectCountriesStatus = createSelector(
  selectCountriesState,
  fromCountries.getStatus
);