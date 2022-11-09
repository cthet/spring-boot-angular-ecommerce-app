import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';
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
} from '../actions/product-list.action';

export const ProductsFeatureKey = 'products';

export interface State {
  products: Product[];
  sort: string[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  products: [],
  sort: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
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

  on(loadSortedProducts, (state, { sort }) => ({
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
  }))
);

export const getProducts = (state: State) => state.products;

export const getSort = (state: State) => state.sort;