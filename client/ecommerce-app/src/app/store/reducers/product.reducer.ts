import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import { loadProduct, loadProductFailure, loadProductSuccess } from '../actions/product.actions';

export const ProductFeatureKey = 'product';

export interface State {
  product: Product | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  product: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
    error: null,
    status: 'success',
  })),

  on(loadProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

);


export const getProduct = (state: State) => state.product;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;