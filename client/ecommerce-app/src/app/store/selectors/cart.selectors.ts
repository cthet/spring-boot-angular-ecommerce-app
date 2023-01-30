import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartFeaturesKey } from "../reducers/cart.reducer";
import * as fromCart from '../reducers/cart.reducer';
import { Cart } from "../../models/Cart";
import { selectProduct } from "./product.selectors";

export const selectCartState = createFeatureSelector<fromCart.State>(cartFeaturesKey);
  
export const selectCartItemIds = createSelector(
  selectCartState,
  fromCart.selectCartItemIds
);

export const selectAllCartItemEntities = createSelector(
  selectCartState,
  fromCart.selectCartItemEntities
);

export const selectAllCartItems = createSelector(
  selectCartState,
  fromCart.selectAllCartItems
);

export const selectCartItemTotal = createSelector(
  selectCartState,
  fromCart.selectCartItemTotal
);

export const selectCurrentCartItemId = createSelector(
  selectCartState,
  fromCart.getSelectedCartItemId
);

export const selectCurrentCartItem = createSelector(
  selectAllCartItemEntities,
  selectCurrentCartItemId,
  (cartItemEntities, cartItemId) => cartItemId && cartItemEntities[cartItemId]
);

export const cartItemExists = createSelector(
  selectAllCartItemEntities,
  selectProduct,
  (cartItemsEntities, product) => {
    return cartItemsEntities[product!.id] == undefined ? false : true;
  }
);

export const selectCartItemEntityById = createSelector(
  selectAllCartItemEntities,
  selectProduct,
  (cartItemEntities, product) => {
    return cartItemEntities[product!.id];
  }
);

export const selectCartItemsIds = createSelector(
  selectCartState,
  fromCart.getSelectedCartItemId
);

export const selectCartItemsTotalQuantity = createSelector(
  selectAllCartItems,
  (cartItems) =>
    cartItems.map((cartItem) => cartItem.quantity).reduce((a, b) => a + b, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  selectAllCartItems,
  (cartItems) =>
    cartItems.map((cartItem) => cartItem.quantity * cartItem.product.unit_price).reduce((a, b) => a + b, 0)
);

export const selectCart = createSelector(
  selectAllCartItems,
  selectCartItemsTotalPrice,
  selectCartItemsTotalQuantity,
  (cartItems, totalPrice, totalQuantity) =>  new Cart(cartItems,totalPrice,totalQuantity)
);