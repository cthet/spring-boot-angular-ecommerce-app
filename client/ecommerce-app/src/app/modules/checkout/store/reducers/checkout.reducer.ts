import { createReducer, on } from '@ngrx/store';
import { PaymentInfo } from 'src/app/models/Payment-info';
import { setPaymentInfo, setPaymentInfoSuccess } from '../actions/checkout.actions';

export const CheckoutPaymentFeatureKey = 'checkoutPayment';

export interface State {
  paymentInfo: PaymentInfo | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  paymentInfo: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(setPaymentInfo, (state) => ({
    ...state,
  })),

  on(setPaymentInfoSuccess, (state, { paymentInfo }) => ({
    ...state,
    paymentInfo: paymentInfo,
    error: null,
    status: 'success',
  })),
);


export const getPaymentInfo = (state: State) => state.paymentInfo; 
export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;