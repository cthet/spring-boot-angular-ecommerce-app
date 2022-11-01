import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/modules/interfaces/models/product';

export const loadProductsByBrandId = createAction(
  '[Products] Load Products',
  props<{ brandId: number }>()
);

export const loadProductsByBrandIdSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsByBrandIdFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: string }>()
);

export const loadProducts = createAction(
  '[Products] Load Products By Category',
  props
);

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products By Category Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products By Category Failure',
  props<{ error: string }>()
);

export const loadSortedProducts = createAction(
  '[Products] Load Sorted Products',
  props<{ sort: string[]}>()
);

export const loadSortedProductsSuccess = createAction(
  '[Products/API] Load Sorted Products Success',
  props<{ products: Product[] }>()
);

export const loadSortedProductsFailure = createAction(
  '[Products/API] Load Sorted Products Failure',
  props<{ error: string }>()
);
