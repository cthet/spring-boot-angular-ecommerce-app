import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";

export const loadProductsByBrand = createAction(
  '[Products Component] Load Products');

export const loadProductsSuccess = createAction(
  '[Products Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products Component] Load Products Failure',
  props<{ error: string }>()
);

export const setSort = createAction(
  '[Products Component] Set Sort',
  props<{ sort: string[] }>()
);

export const loadFilteredProducts = createAction(
  '[Sort Products Page] Load Filtered Products By Category and sorted By Price');

export function loadSortedProducts(arg0: { sort: any; }): any {
  throw new Error('Function not implemented.');
}


