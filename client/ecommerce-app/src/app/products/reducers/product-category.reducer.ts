import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import {
  loadApparelCategories,
  loadApparelCategoriesSuccess,
  loadApparelCategoriesFailure,
  loadApparelCategoriesByBrandId,
  loadApparelCategoriesByBrandIdFailure,
  loadApparelCategoriesByBrandIdSuccess,
  checkApparelCategory,
  uncheckApparelCategory,
} from '../actions/product-category.action';

export const CategoriesFeatureKey = 'categories';


export interface State {
  apparelCategories: ApparelCategory[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  apparelCategories: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
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
      if (category.id === apparelCategoryId) {
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
      if (category.id === apparelCategoryId) {
        return { ...category, checked: false };
      }
      return category;
    }),
    error: null,
    status: 'pending',
  }))
);

export const apparelCategories = (state: State) => state.apparelCategories;