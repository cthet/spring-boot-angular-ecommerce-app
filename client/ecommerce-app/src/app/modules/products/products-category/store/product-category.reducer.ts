import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import {
  loadApparelCategories,
  loadApparelCategoriesSuccess,
  loadApparelCategoriesFailure,
  loadApparelCategoriesByBrandId,
  loadApparelCategoriesByBrandIdFailure,
  loadApparelCategoriesByBrandIdSuccess,
  checkApparelCategory,
  uncheckApparelCategory,
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

  on(loadApparelCategories, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadApparelCategoriesSuccess, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories.map((category) => {
      return { ...category, checked: false };
    }),
    error: null,
    status: 'success',
  })),

  on(loadApparelCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(loadApparelCategoriesByBrandId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadApparelCategoriesByBrandIdSuccess, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories.map((category) => {
      return { ...category, checked: false };
    }),
    error: null,
    status: 'success',
  })),

  on(loadApparelCategoriesByBrandIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(checkApparelCategory, (state, { apparelCategoryId }) => ({
    ...state,
    apparelCategories: state.apparelCategories.map((category) => {   
      if(category.id === apparelCategoryId) {
        return { ...category, checked: true };
      }
      return category;
      }),    
    error: null,
    status: 'pending',
  })),

  on(uncheckApparelCategory, (state, { apparelCategoryId }) => ({
    ...state,
    apparelCategories: state.apparelCategories.map((category) => {   
      if(category.id === apparelCategoryId) {
        return { ...category, checked: false };
      }
      return category;
      }),    
    error: null,
    status: 'pending',
  }))
);
