import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { ProductsCategoryState } from "./product-category.reducer";

export const selectProductsCategoryState = (state: AppState) => state.categories;

export const selectApparelCategories = createSelector(
  selectProductsCategoryState,
  (state: ProductsCategoryState) => state.apparelCategories
);
