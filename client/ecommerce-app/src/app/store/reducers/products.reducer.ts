import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import { loadProductsSuccess, loadProductsFailure, loadFilteredProducts, loadProductsByBrand, setSort } from '../actions/products.actions';

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

  on(loadProductsByBrand, loadFilteredProducts, (state) => ({
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

  on(setSort, (state, { sort }) => ({
    ...state,
    sort: sort,
  })),
);

export const getProducts = (state: State) => state.products;

export const getSort = (state: State) => state.sort;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;