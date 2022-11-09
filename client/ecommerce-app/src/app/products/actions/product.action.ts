import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';

export const setProduct = createAction(
  '[Product] Set Product',
  props<{ product: Product }>()
);
