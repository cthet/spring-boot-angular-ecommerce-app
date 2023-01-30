import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from '../../../../models/ApparelCategory';
import { checkApparelCategory, loadApparelCategoriesByBrand, loadApparelCategoriesByBrandFailure, loadApparelCategoriesByBrandSuccess, setApparelCategories, uncheckApparelCategory } from '../actions/apparel-categories.actions';

export const ApparelCategoriesFeatureKey = 'apparelCategories';

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

  on(loadApparelCategoriesByBrand,(state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadApparelCategoriesByBrandSuccess, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories,
    error: null,
    status: 'success',
  })),

  on(loadApparelCategoriesByBrandFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setApparelCategories, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories,
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
  })),

);

export const getApparelCategories = (state: State) => state.apparelCategories;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;
