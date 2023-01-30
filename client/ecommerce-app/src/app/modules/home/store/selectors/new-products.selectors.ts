import { createSelector } from "@ngrx/store";
import { selectHomeState } from "..";
import * as fromNewProducts from '../reducers/newProducts.reducer';


export const selectNewProductsState = createSelector(
  selectHomeState,
  (state) => state.newProducts
);


export const selectNewProducts = createSelector(
  selectNewProductsState,
  fromNewProducts.getNewProducts
);

export const selectStatus = createSelector(
  selectNewProductsState,
  fromNewProducts.getStatus
);

export const selectError = createSelector(
  selectNewProductsState,
  fromNewProducts.getError
);