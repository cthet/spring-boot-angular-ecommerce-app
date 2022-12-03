import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProducts from "../reducers/products.reducer";

export const selectProductsState = createFeatureSelector<fromProducts.State>(fromProducts.ProductsFeatureKey);


export const selectProducts = createSelector(
  selectProductsState,
  fromProducts.getProducts
);

export const selectSort = createSelector(
  selectProductsState,
  fromProducts.getSort
);
