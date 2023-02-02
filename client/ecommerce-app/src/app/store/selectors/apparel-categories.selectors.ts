import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromApparelCategories from '../reducers/apparel-categories.reducer'

export const selectApparelCategoriesState = createFeatureSelector<fromApparelCategories.State>(fromApparelCategories.ApparelCategoriesFeatureKey);


export const selectApparelCategories = createSelector(
  selectApparelCategoriesState,
  fromApparelCategories.getCategories
);

export const selectApparelCategoriesError = createSelector(
  selectApparelCategoriesState,
  fromApparelCategories.getError
);

export const selectApparelCategoriesStatus = createSelector(
  selectApparelCategoriesState,
  fromApparelCategories.getStatus
);

export const selectApparelCategory = createSelector(
  selectApparelCategoriesState,
  fromApparelCategories.getApparelCategory
);