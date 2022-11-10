// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { selectProduct } from 'src/app/products/reducers';
// import * as fromCartItem from '../../core/reducers/cart.reducer';

// export const cartItemsFeatureKey = 'cartItems';

// export interface CartItemState {
//   cartItems: fromCartItem.State;
// }

// export const selectCartItemState = createFeatureSelector<fromCartItem.State>(
//   fromCartItem.cartItemsFeatureKey
// );

// export const selectCartItemIds = createSelector(
//   selectCartItemState,
//   fromCartItem.selectCartItemIds
// );

// export const selectAllCartItemEntities = createSelector(
//   selectCartItemState,
//   fromCartItem.selectCartItemEntities
// );

// export const selectAllCartItems = createSelector(
//   selectCartItemState,
//   fromCartItem.selectAllCartItems
// );

// export const selectCartItemTotal = createSelector(
//   selectCartItemState,
//   fromCartItem.selectCartItemTotal
// );

// export const selectCurrentCartItemId = createSelector(
//   selectCartItemState,
//   fromCartItem.getSelectedCartItemId
// );

// export const selectCurrentCartItem = createSelector(
//   selectAllCartItemEntities,
//   selectCurrentCartItemId,
//   (cartItemEntities, cartItemId) => cartItemId && cartItemEntities[cartItemId]
// );

// export const cartItemExists = createSelector(
//   selectAllCartItemEntities,
//   selectProduct,
//   (cartItemsEntities, product) => {
//     return cartItemsEntities[product.id] == undefined ? false : true;
//   }
// );

// export const selectCartItemEntityById = createSelector(
//   selectAllCartItemEntities,
//   selectProduct,
//   (cartItemEntities, product) => {
//     return cartItemEntities[product.id];
//   }
// );

// export const selectCartItemsIds = createSelector(
//   selectCartItemState,
//   fromCartItem.getSelectedCartItemId
// );
