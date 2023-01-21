import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/Product";


export const loadProduct = createAction(
  '[Product Page Component] load Product',
  props<{ productId: number }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] load Product Failure',
  props<{ error: string }>()
);


