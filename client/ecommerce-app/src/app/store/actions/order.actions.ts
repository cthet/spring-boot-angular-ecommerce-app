import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/Order';
import { OrdersResponse } from 'src/app/models/OrdersResponse';

export const saveOrder = createAction(
  '[Checkout Component] Save order');

export const saveOrderSuccess = createAction(
  '[Order Effects Component] Save order Success', props<{ order: Order}>());

export const saveOrderFailure = createAction(
  '[Order Effects Component] Save order Failure',   props<{ error: string }>());

 
export const loadOrders = createAction('[Profile Component] Load orders');

export const loadOrdersSuccess = createAction(
  '[Order Effects Component] Load orders Success',
  props<{ ordersRes: OrdersResponse }>()
);

export const loadOrdersFailure = createAction(
  '[Order Effects Component] Load orders Failure',
  props<{ error: string }>()
);






