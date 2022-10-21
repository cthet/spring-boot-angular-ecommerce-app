import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import {
  RemoveBrand,
  loadBrandByGenderIdAndBrandId,
  loadBrandByGenderIdAndBrandIdSuccess,
  loadBrandByGenderIdAndBrandIdFailure,
  loadApparelCategoriesByGenderIdAndBrandId,
  loadApparelCategoriesByGenderIdAndBrandIdSuccess,
  loadApparelCategoriesByGenderIdAndBrandIdFailure,
} from './product-list.action';

export interface ProductsState {
  brand: Brand | null;
  apparelCategories: ApparelCategory[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductsState = {
  brand: null,
  apparelCategories: [],
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

  on(loadApparelCategoriesByGenderIdAndBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadApparelCategoriesByGenderIdAndBrandIdSuccess, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories,
    error: null,
    status: 'success',
  })),

  on(loadApparelCategoriesByGenderIdAndBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
