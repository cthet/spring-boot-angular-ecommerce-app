import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { ApparelCategoriesState } from "./apparel-categories.reducer";

export const selectApparelCategories = (state: AppState) => state.apparelCategories;

export const selectAllApparelCategories = createSelector(
  selectApparelCategories,
  (state: ApparelCategoriesState) => state.apparelCategories
);