import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../models/cart-Item';
import { Cart } from '../../models/cart';

export const addCartItem = createAction(
  '[Product Page Component] add CartItem',
  props<{ cartItem: CartItem }>()
);

export const updateCartItem = createAction(
  '[Cart details Component] update CartItem',
  props<{ update: Update<CartItem> }>()
);

export const deleteCartItem = createAction(
  '[Header Page/Cart Details Component] delete Cart Item',
  props<{ id: number }>()
);


export const clearAllCartItems = createAction('[Header Page Component] Clear all CartItems');

 
export const loadCart = createAction('[Login Effects Component] Load cart');


export const loadCartSuccess = createAction(
  '[Core Component] Load Cart Success',
  props<{ cart: Cart }>()
);



export const loadCartFailure = createAction(
  '[Core Component] Load cart Failure',
  props<{ error: any }>()
);

export const browserReload = createAction(
  '[App Component] Browser Reload Cart',
  props<{ cart: Cart }>()
);

export const upsertCartItems = createAction(
  '[Cart Effects Component] upsert many CartItem',
  props<{ cartItems: CartItem[] }>()
);






