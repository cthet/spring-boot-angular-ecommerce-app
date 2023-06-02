import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../models/CartItem';
import { addCartItem, browserReload, clearAllCartItems, deleteCartItem, loadCart, loadCartFailure, loadCartSuccess, saveCart, saveCartFailure, saveCartSuccess, updateCartItem } from '../actions/cart.actions';

export const cartFeaturesKey = 'cart';

export interface State extends EntityState<CartItem> {
  selectedCartItemId: number | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: selectCartItemId,
});

export const initialState: State = adapter.getInitialState({
  selectedCartItemId: null,
  error: null,
  status: 'pending',
});

export function selectCartItemId(cartItem: CartItem): number {
  return cartItem.product.id;
}

export const reducer = createReducer<State>(
  initialState,

  on(addCartItem, (state, { cartItem }) => adapter.addOne(cartItem, state)),

  on(updateCartItem, (state, { update }) => adapter.updateOne(update, state)),

  on(deleteCartItem, (state, { id }) => adapter.removeOne(id, state)),

  on(loadCart, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),

  // on(loadCartSuccess, (state, { cart }) => adapter.upsertMany(cart.cartItems, {...state, status: 'success', error: null})),

  on(loadCartSuccess, (state, { cart }) => {
    console.log(cart); 
  
    return adapter.upsertMany(cart.cartItems, { ...state, status: 'success', error: null });
  }),

  on(loadCartFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(saveCart, (state) => ({
    ...state,
    error: null,
    status: 'loading',
  })),

  on(saveCartSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success',
  })),

  on(saveCartFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(browserReload, (state, { cart }) => adapter.setAll(cart.cartItems, state)),

  on(clearAllCartItems, (state) => adapter.removeAll({...state, selectedCartItemId: null}))

);


export const getSelectedCartItemId = (state: State) => state.selectedCartItemId;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCartItemIds = selectIds;
export const selectCartItemEntities = selectEntities;
export const selectAllCartItems = selectAll;
export const selectCartItemTotal = selectTotal;

export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;

