import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromBrands from "../reducers/brands.reducer";

export const selectBrandsState = createFeatureSelector<fromBrands.State>(fromBrands.BrandsFeatureKey);


export const selectBrands = createSelector(
  selectBrandsState,
  fromBrands.getBrands
);

export const selectBrand = createSelector(
  selectBrandsState,
  fromBrands.getBrand
);

export const selectBrandsError = createSelector(
  selectBrandsState,
  fromBrands.getError
)

export const selectBrandsStatus = createSelector(
  selectBrandsState,
  fromBrands.getStatus
)





