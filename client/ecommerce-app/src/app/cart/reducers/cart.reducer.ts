import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cart-Item';
import { addCartItem, updateCartItem } from '../actions/cart.action';

export const cartItemsFeatureKey = 'cartItems';

export interface State extends EntityState<CartItem> {
  selectedCartItemId: number | null;
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: selectCartItemId,
});

export const initialState: State = adapter.getInitialState({
  selectedCartItemId: null,
});

export function selectCartItemId(cartItem: CartItem): number {
  return cartItem.item.id;
}

export const reducer = createReducer<State>(
  initialState,

  on(addCartItem, (state, { cartItem }) => adapter.addOne(cartItem, state)),

  on(updateCartItem, (state, { update }) => adapter.updateOne(update, state))
);

export const getSelectedCartItemId = (state: State) =>
  state.selectedCartItemId;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCartItemIds = selectIds;

export const selectCartItemEntities = selectEntities;

export const selectAllCartItems = selectAll;

export const selectCartItemTotal = selectTotal;
