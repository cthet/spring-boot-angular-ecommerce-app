import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { CartItem } from '../models/cart-Item';

export const addCartItem = createAction(
  '[Cart] add Cart Item',
  props<{ cartItem: CartItem }>()
);

export const updateCartItem = createAction(
  '[Cart] update Cart Item',
  props<{ update: Update<CartItem> }>()
);
