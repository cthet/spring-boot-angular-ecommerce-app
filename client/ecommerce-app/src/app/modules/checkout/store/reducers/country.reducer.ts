import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/models/country';
import { loadAddressesFailure } from '../actions/address.actions';
import { loadCountries, loadCountriesSuccess } from '../actions/country.actions';
import { adapter } from './address.reducer';

export const CountryFeatureKey = 'country';

export interface State {
  countries: Country[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  countries: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadCountries, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries: countries,
    error: null,
    status: 'success',
  })),

  on(loadAddressesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectCountryIds = selectIds;
export const selectCountryEntities = selectEntities;
export const selectAllCountries = selectAll;
export const selectCountryTotal = selectTotal;

export const getCountries = (state: State) => state.countries; 
export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;