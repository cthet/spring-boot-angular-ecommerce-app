import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/models/Country';
import { loadAddressesFailure } from '../actions/address.actions';
import { loadCountries, loadCountriesSuccess } from '../actions/country.actions';

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

export const getCountries = (state: State) => state.countries; 
export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;