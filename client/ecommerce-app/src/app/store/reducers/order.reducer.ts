import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/models/Order';
import { loadOrders, loadOrdersFailure, loadOrdersSuccess, saveOrder, saveOrderFailure, saveOrderSuccess } from '../actions/order.actions';

export const orderFeaturesKey = 'order';

export interface State extends EntityState<Order> {
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({});


export const initialState: State = adapter.getInitialState({
  error: null,
  status: 'pending',
});


export const reducer = createReducer<State>(
  initialState,

  on(saveOrder, loadOrders, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),

  on(saveOrderSuccess, (state, { order }) => adapter.addOne(order, {...state, status: 'success', error: null})),

  on(saveOrderFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(loadOrdersSuccess, (state, {orders}) => adapter.upsertMany(orders, {...state, status: 'success', error: null})),

  on(loadOrdersFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  )
;


const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

  
export const selectOrderIds = selectIds;
export const selectOrderEntities = selectEntities;
export const selectAllOrders = selectAll;
export const selectOrderTotal = selectTotal;


export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;

