import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import { Product } from 'src/app/modules/interfaces/models/product';
import {
  RemoveBrand,
  loadBrandByGenderIdAndBrandId,
  loadBrandByGenderIdAndBrandIdSuccess,
  loadBrandByGenderIdAndBrandIdFailure,
  loadProductsByGenderIdAndBrandIdAndCategoryId,
  loadProductsByGenderIdAndBrandIdAndCategoryIdSuccess,
  loadProductsByGenderIdAndBrandIdAndCategoryIdFailure,
} from './product-list.action';

export interface ProductsState {
  brand: Brand | null;
  products: Product[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductsState = {
  brand: null,
  products: [],
  error: null,
  status: 'pending',
};

export const productsReducer = createReducer<ProductsState>(
  initialState,

  on(loadBrandByGenderIdAndBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadBrandByGenderIdAndBrandIdSuccess, (state, { brand }) => ({
    ...state,
    brand: brand,
    error: null,
    status: 'success',
  })),

  on(loadBrandByGenderIdAndBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(RemoveBrand, (state) => ({
    ...state,
    brand: null,
    error: null,
    status: 'error',
  })),

  on(loadProductsByGenderIdAndBrandIdAndCategoryId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductsByGenderIdAndBrandIdAndCategoryIdSuccess, (state, { products }) => ({
    ...state,
    products: [...state.products, ...products],
    error: null,
    status: 'success',
  })),

  on(loadProductsByGenderIdAndBrandIdAndCategoryIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
