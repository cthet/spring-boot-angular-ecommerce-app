import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from '../../models/apparelCategory';
import { loadApparelCategories, loadApparelCategoriesFailure, loadApparelCategoriesSuccess } from '../actions/apparel-categories.actions';

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

  on(
    loadApparelCategoriesSuccess,
    (state, { apparelCategories }) => ({
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

);

export const getCategories = (state: State) => state.apparelCategories;

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;