import { createReducer, on } from "@ngrx/store";
import { ApparelCategory } from "src/app/modules/interfaces/models/apparelCategory";
import { loadApparelCategoriesBygenderId, loadApparelCategoriesBygenderIdAndBrandId, loadApparelCategoriesFailure, loadApparelCategoriesSuccess } from "./apparel-categories.actions";

export interface ApparelCategoriesState {
  apparelCategories: ApparelCategory[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ApparelCategoriesState = {
  apparelCategories: [],
  error: null,
  status: 'pending',
};

export const apparelCategoriesReducer = createReducer<ApparelCategoriesState>(
  initialState,

  on(loadApparelCategoriesBygenderId, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(loadApparelCategoriesBygenderIdAndBrandId, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(loadApparelCategoriesSuccess, (state, {apparelCategories}) => ({
    ...state,
    apparelCategories: apparelCategories,
    error: null,
    status: 'success'
  })),

  on(loadApparelCategoriesFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
);
