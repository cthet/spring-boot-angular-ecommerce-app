import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/Product";

export const loadProductsByBrand = createAction(
  '[Products Component] Load Products');

export const loadProductsSuccess = createAction(
  '[Products Effect] Load Products Success',
  props<{ products: Product[], current_page: number, size: number, total_items: number,
    total_pages: number }>()
);

export const loadProductsFailure = createAction(
  '[Products Component] Load Products Failure',
  props<{ error: string }>()
);

export const setSort = createAction(
  '[Products Component] Set Sort',
  props<{ sort: string[] }>()
);

export const setCurrentPage = createAction(
  '[Products Component] Set CurrentPage',
  props<{ currentPage: number }>()
);

export const loadFilteredProducts = createAction(
  '[Brand Products Page] Load Filtered Products By Category and sorted By Price and Page');


