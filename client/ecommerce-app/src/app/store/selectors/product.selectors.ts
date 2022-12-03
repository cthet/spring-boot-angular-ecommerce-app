import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProduct from "../reducers/product.reducer";

export const selectProductState = createFeatureSelector<fromProduct.State>(fromProduct.ProductFeatureKey);

export const selectProduct = createSelector(
  selectProductState,
  fromProduct.getProduct
);

