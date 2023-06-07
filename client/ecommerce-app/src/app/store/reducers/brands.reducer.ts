import { createReducer, on } from '@ngrx/store';
import { loadBrands, loadBrandsSuccess, loadBrandsFailure, setBrand, browserReload } from '../actions/brands.actions';
import { Brand } from 'src/app/models/Brand';

export const BrandsFeatureKey = 'brands';

export interface State {
  brands: Brand[];
  brand: Brand | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  brands: [],
  brand: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadBrands, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadBrandsSuccess, (state, { brands }) => ({
    ...state,
    brands: brands,
    error: null,
    status: 'success',
  })),

  on(loadBrandsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setBrand, (state, { brand }) => ({
    ...state,
    brand: brand,
  })),

  on(browserReload, (state, { brand }) => ({
    ...state,
    brand : brand,
  })),

);

export const getBrands = (state: State) => state.brands;

export const getBrand = (state: State) => state.brand;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;
