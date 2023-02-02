import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from '../../models/ApparelCategory';
import { browserReload, checkApparelCategory, loadApparelCategories, loadApparelCategoriesFailure, loadApparelCategoriesSuccess, setApparelCategory, uncheckApparelCategory } from '../actions/apparel-categories.actions';

export const ApparelCategoriesFeatureKey = 'apparelCategories';

export interface State {
  apparelCategories: ApparelCategory[];
  apparelCategory: ApparelCategory | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  apparelCategories: [],
  apparelCategory: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadApparelCategories, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadApparelCategoriesSuccess,(state, { apparelCategories }) => ({
      ...state,
      apparelCategories: apparelCategories,
      error: null,
      status: 'success',
    })
  ),

  on(loadApparelCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setApparelCategory, (state, { apparelCategory }) => ({
    ...state,
    apparelCategory: apparelCategory,
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

  on(browserReload, (state, { apparelCategory }) => ({
    ...state,
    apparelCategory : apparelCategory,
  })),

);

export const getCategories = (state: State) => state.apparelCategories;

export const getApparelCategory = (state: State) => state.apparelCategory;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;