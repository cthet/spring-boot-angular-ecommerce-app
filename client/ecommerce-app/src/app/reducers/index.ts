import {
  Action,
  ActionReducer,
  ActionReducerMap,
  combineReducers,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromHeader from '../core/reducers/header.reducer';
import * as fromCart from '../core/reducers/cart.reducer';
import { selectProduct } from 'src/app/products/reducers';
import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const CoreFeatureKey = 'core';

export interface coreState {
  [fromHeader.HeaderFeatureKey]: fromHeader.State;
  [fromCart.cartFeaturesKey]: fromCart.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<coreState, Action>
>('Root reducers token', {
  factory: () => ({
    [fromHeader.HeaderFeatureKey]: fromHeader.reducer,
    [fromCart.cartFeaturesKey]: fromCart.reducer,
  }),
});

export function logger(
  reducer: ActionReducer<coreState>
): ActionReducer<coreState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<coreState>[] = !environment.production
  ? [logger]
  : [];

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<coreState>
>('Feature Reducers');

export function getReducers(): ActionReducerMap<coreState> {
  return {
    [fromHeader.HeaderFeatureKey]: fromHeader.reducer,
    [fromCart.cartFeaturesKey]: fromCart.reducer,
  };
}

export function reducers(state: coreState | undefined, action: Action) {
  return combineReducers({
    [fromHeader.HeaderFeatureKey]: fromHeader.reducer,
    [fromCart.cartFeaturesKey]: fromCart.reducer,
  })(state, action);
}

// export const reducers: ActionReducerMap<State> = {
//   [fromHeader.HeaderFeatureKey]: fromHeader.reducer,
//   [fromCart.cartFeaturesKey]: fromCart.reducer,
// };

export const selectCoreState = createFeatureSelector<coreState>(CoreFeatureKey);

export const selectHeaderState = createSelector(
  selectCoreState,
  (state) => state.header
);

export const selectGender = createSelector(
  selectHeaderState,
  (state) => state.gender
);

export const selectCartItemState = createSelector(
  selectCoreState,
  (state) => state.cart
);

export const selectCartItemIds = createSelector(
  selectCartItemState,
  fromCart.selectCartItemIds
);

export const selectAllCartItemEntities = createSelector(
  selectCartItemState,
  fromCart.selectCartItemEntities
);

export const selectAllCartItems = createSelector(
  selectCartItemState,
  fromCart.selectAllCartItems
);

export const selectCartItemTotal = createSelector(
  selectCartItemState,
  fromCart.selectCartItemTotal
);

export const selectCurrentCartItemId = createSelector(
  selectCartItemState,
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
    return cartItemsEntities[product.id] == undefined ? false : true;
  }
);

export const selectCartItemEntityById = createSelector(
  selectAllCartItemEntities,
  selectProduct,
  (cartItemEntities, product) => {
    return cartItemEntities[product.id];
  }
);

export const selectCartItemsIds = createSelector(
  selectCartItemState,
  fromCart.getSelectedCartItemId
);

export const selectCartItemsQuantity = createSelector(
  selectAllCartItems,
  (cartItems) =>
    cartItems.map((cartItem) => cartItem.quantity).reduce((a, b) => a + b)
);
