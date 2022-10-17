import { createReducer, on } from "@ngrx/store";
import { Brand } from "src/app/modules/interfaces/models/brand";
import { loadBrands, loadBrandsFailure, loadBrandsSuccess } from "./brands.actions";

export interface BrandState {
  brands: Brand[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: BrandState = {
  brands: [],
  error: null,
  status: 'pending',
};

export const brandReducer = createReducer<BrandState>(
  initialState,

  on(loadBrands, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(loadBrandsSuccess, (state, {brands}) => ({
    ...state,
    brands: brands,
    error: null,
    status: 'success'
  })),

  on(loadBrandsFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
);
