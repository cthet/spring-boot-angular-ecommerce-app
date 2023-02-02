import { createSelector } from "@ngrx/store";
import { selectApparelCategoryState } from "..";
import * as fromBrandCategories from '../reducers/brand-categories.reducer'

export const selectBrandCategoriesState = createSelector(
  selectApparelCategoryState,
  (state) => state.brandCategories
)

export const selectBrandCategories = createSelector(
  selectBrandCategoriesState,
  fromBrandCategories.getBrandCategories
);
