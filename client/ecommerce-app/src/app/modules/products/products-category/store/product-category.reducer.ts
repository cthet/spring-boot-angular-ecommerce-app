import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import {
  loadApparelCategoriesByBrandId,
  loadApparelCategoriesByBrandIdSuccess,
  loadApparelCategoriesByBrandIdFailure,
} from './product-category.action';

export interface ProductsCategoryState {
  apparelCategories: ApparelCategory[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductsCategoryState = {
  apparelCategories: [],
  error: null,
  status: 'pending',
};

export const productsCategoryReducer = createReducer<ProductsCategoryState>(
  initialState,

  on(loadApparelCategoriesByBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(
    loadApparelCategoriesByBrandIdSuccess,
    (state, { apparelCategories }) => ({
      ...state,
      apparelCategories: apparelCategories,
      error: null,
      status: 'success',
    })
  ),

  on(loadApparelCategoriesByBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
