import { createSelector } from "@ngrx/store";
import { selectCheckoutState } from "..";
import * as fromCheckoutPayment from '../reducers/checkout.reducer';

export const selectCheckoutPaymentState = createSelector(
  selectCheckoutState,
  (state) => state.checkoutPayment
)

export const selectPaymentInfo = createSelector(
  selectCheckoutPaymentState,
  fromCheckoutPayment.getPaymentInfo
);

export const selectPaymentInfoError = createSelector(
  selectCheckoutPaymentState,
  fromCheckoutPayment.getError
);

export const selectPaymentInfoStatus = createSelector(
  selectCheckoutPaymentState,
  fromCheckoutPayment.getStatus
);