import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/modules/interfaces/models/product';
import {
  loadProducts,
  loadProductsByBrandId,
  loadProductsByBrandIdFailure,
  loadProductsByBrandIdSuccess,
  loadProductsFailure,
  loadProductsSuccess,
  loadSortedProducts,
  loadSortedProductsFailure,
  loadSortedProductsSuccess,
} from './product-list.action';

export interface ProductsState {
  products: Product[];
  sort: string[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: ProductsState = {
  products: [],
  sort: [],
  error: null,
  status: 'pending',
};

export const productsReducer = createReducer<ProductsState>(
  initialState,

  on(loadProductsByBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductsByBrandIdSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),

  on(loadProductsByBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(loadProducts, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(loadSortedProducts, (state, {sort}) => ({
    ...state,
    sort: sort,
    status: 'loading',
  })),

  on(loadSortedProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),

  on(loadSortedProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

);
