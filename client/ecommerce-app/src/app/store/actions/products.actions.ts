import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/Product";

export const loadProductsByBrand = createAction(
  '[Products Component] Load Products By Brand');

export const loadProductsByApparelCategory = createAction(
    '[Products Component] Load Products By Apparel Category');

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

export const loadFilteredProductsFromBrand = createAction(
  '[Products Page Component] Load Filtered Products By Apparel Category, sorted By Price, and Page');

export const loadFilteredProductsFromApparelCategory = createAction(
  '[Products Page Component] Load Filtered Products By Brand, Apparel Category, sorted By Price, and Page');
  


