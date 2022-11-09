import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/products/models/brand';
import {
  loadBrandByBrandId,
  loadBrandByBrandIdSuccess,
  loadBrandByBrandIdFailure,
  removeBrand,
} from '../actions/brand.actions';

export const BrandFeatureKey = 'brand';

export interface State {
  brand: Brand;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  brand: { id: 0, brand_category: '', image_url: '', description: '' },
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadBrandByBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadBrandByBrandIdSuccess, (state, { brand }) => ({
    ...state,
    brand: brand,
    error: null,
    status: 'success',
  })),

  on(loadBrandByBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(removeBrand, (state) => ({
    ...state,
    brand: { id: 0, brand_category: '', image_url: '', description: '' },
    error: null,
    status: 'error',
  }))
);


export const getBrand = (state: State) => state.brand;
