import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { BrandState } from "./brands.reducer";

export const selectBrands = (state: AppState) => state.brands;

export const selectAllBrand = createSelector(
  selectBrands,
  (state: BrandState) => state.brands
);