import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import { loadProductsSuccess, loadProductsFailure, loadProductsByBrand, setSort, setCurrentPage, loadFilteredProductsFromBrand } from '../actions/products.actions';

export const ProductsFeatureKey = 'products';

export interface State {
  products: Product[];
  currentPage: number;
  size: number;
  totalItems: number;
  totalPages: number;
  sort: string[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  products: [],
  currentPage: 0,
  size: 9,
  totalItems: 0,
  totalPages: 1,
  sort: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadProductsByBrand, loadFilteredProductsFromBrand, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadProductsSuccess, (state, { products, current_page, size, total_items, total_pages }) => ({
    ...state,
    products: products,
    currentPage: current_page,
    size: size,
    totalItems: total_items,
    totalPages: total_pages,
    error: null,
    status: 'success',
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setCurrentPage, (state, { currentPage }) => ({
    ...state,
    currentPage: currentPage,
  })),

  on(setSort, (state, { sort }) => ({
    ...state,
    sort: sort,
  })),
);

export const getProducts = (state: State) => state.products;
export const getCurrentPage = (state: State) => state.currentPage;
export const getSize = (state: State) => state.size;
export const getTotalItems = (state: State) => state.totalItems;
export const getTotalPages = (state: State) => state.totalPages;
export const getSort = (state: State) => state.sort;
export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;