import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import {
  loadApparelCategoriesByGenderIdAndBrandId,
  loadApparelCategoriesByGenderIdAndBrandIdSuccess,
  loadApparelCategoriesByGenderIdAndBrandIdFailure,
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

  on(loadApparelCategoriesByGenderIdAndBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(
    loadApparelCategoriesByGenderIdAndBrandIdSuccess,
    (state, { apparelCategories }) => ({
      ...state,
      apparelCategories: apparelCategories,
      error: null,
      status: 'success',
    })
  ),

  on(loadApparelCategoriesByGenderIdAndBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
