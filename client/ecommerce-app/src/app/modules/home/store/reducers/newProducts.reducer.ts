import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/Product';
import { loadNewProducts, loadNewProductsSuccess, loadNewProductsFailure } from '../actions/newProducts.actions';

export const NewProductsFeatureKey = 'newProducts';

export interface State {
  newProducts: Product[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  newProducts: [],
  error: null,
  status: 'pending' 
}

export const reducer = createReducer<State>(
  initialState,
 
on(loadNewProducts, (state) => ({
    ...state,
    error: null,
    status: 'loading' 
  })),

on(loadNewProductsSuccess, (state, {products}) => ({
  ...state,
  newProducts: products,
  error: null,
  status: 'success'
  })),

  on(loadNewProductsFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
    })),

);

export const getNewProducts = (state: State) => state.newProducts;
export const getStatus = (state: State) => state.status;
export const getError = (state: State) => state.error;