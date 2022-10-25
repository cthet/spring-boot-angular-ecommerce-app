import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import { Product } from 'src/app/modules/interfaces/models/product';
import {
  loadProductsByBrandIdAndCategoryId,
  loadProductsByBrandIdAndCategoryIdSuccess,
  loadProductsByBrandIdAndCategoryIdFailure,
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

  on(loadProductsByBrandIdAndCategoryId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductsByBrandIdAndCategoryIdSuccess, (state, { products }) => ({
    ...state,
    products: [...state.products, ...products],
    error: null,
    status: 'success',
  })),

  on(loadProductsByBrandIdAndCategoryIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
