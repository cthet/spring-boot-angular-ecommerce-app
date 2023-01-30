import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/Product";

export const loadNewProducts = createAction(
  '[Home Component] Load New Products');

export const loadNewProductsSuccess = createAction(
  '[NewProducts Effect] Load New Products Success',
  props<{ products: Product[] }>()
);

export const loadNewProductsFailure = createAction(
  '[NewProducts Component] Load New Products Failure',
  props<{ error: string }>()
);