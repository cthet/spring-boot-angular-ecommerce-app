import { createReducer, on } from '@ngrx/store';
import { Brand } from '../../../../models/Brand';
import { loadBrandCategoriesByApparelCategory, loadBrandCategoriesByApparelCategorySuccess, loadBrandCategoriesByApparelCategoryFailure, checkBrandCategory, uncheckBrandCategory } from '../actions/brand-categories-actions';

export const BrandCategoriesFeatureKey = 'brandCategories';

export interface State {
  brandCategories: Brand[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  brandCategories: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadBrandCategoriesByApparelCategory,(state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadBrandCategoriesByApparelCategorySuccess, (state, { brands }) => ({
    ...state,
    brandCategories: brands,
    error: null,
    status: 'success',
  })),

  on(loadBrandCategoriesByApparelCategoryFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(checkBrandCategory, (state, { brandCategoryId }) => ({
    ...state,
    brandCategories: state.brandCategories.map((category) => {
      if (category.id === brandCategoryId) {
        return { ...category, checked: true };
      }
      return category;
    }),
    error: null,
    status: 'pending',
  })),

  on(uncheckBrandCategory, (state, { brandCategoryId }) => ({
    ...state,
    brandCategories: state.brandCategories.map((category) => {
      if (category.id === brandCategoryId) {
        return { ...category, checked: false };
      }
      return category;
    }),
    error: null,
    status: 'pending',
  })),

);

export const getBrandCategories = (state: State) => state.brandCategories;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;
