import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromOrders from "../reducers/order.reducer";

export const selectOrderState = createFeatureSelector<fromOrders.State>(fromOrders.orderFeaturesKey);


export const selectOrderIds = createSelector(
  selectOrderState,
  fromOrders.selectOrderIds
);

export const selectAllOrderEntities = createSelector(
  selectOrderState,
  fromOrders.selectOrderEntities
);

export const selectAllOrders = createSelector(
  selectOrderState,
  fromOrders.selectAllOrders
);
