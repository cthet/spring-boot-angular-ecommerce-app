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

export const selectCurrentPage = createSelector(
  selectProductsState,
  fromProducts.getCurrentPage
);
export const selectSize = createSelector(
  selectProductsState,
  fromProducts.getSize
);
export const selectTotalItems = createSelector(
  selectProductsState,
  fromProducts.getTotalItems
);
export const selectTotalPages = createSelector(
  selectProductsState,
  fromProducts.getTotalPages
);