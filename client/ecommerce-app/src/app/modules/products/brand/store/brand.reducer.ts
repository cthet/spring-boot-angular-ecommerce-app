import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import {
  loadBrandByBrandId,
  loadBrandByBrandIdSuccess,
  loadBrandByBrandIdFailure,
  RemoveBrand,
} from './brand.actions';

export interface BrandState {
  brand: Brand;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: BrandState = {
  brand: { id: 0, brand_category: '', image_url: '', description: '' },
  error: null,
  status: 'pending',
};

export const brandReducer = createReducer<BrandState>(
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

  on(RemoveBrand, (state) => ({
    ...state,
    brand: { id: 0, brand_category: '', image_url: '', description: '' },
    error: null,
    status: 'error',
  }))
);
