import { createSelector } from "@ngrx/store";
import { selectBrandState } from "..";
import * as fromCategories from '../reducers/apparel-categories.reducer'

export const selectApparelCategoriesState = createSelector(
  selectBrandState,
  (state) => state.apparelCategories
)

export const selectApparelCategories = createSelector(
  selectApparelCategoriesState,
  fromCategories.getApparelCategories
);
