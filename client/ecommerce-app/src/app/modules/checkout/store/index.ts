import * as fromAddress from './reducers/address.reducer'
import * as fromCountry from './reducers/country.reducer'
import * as fromCheckout from './reducers/checkout.reducer'
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const CheckoutFeatureKey = 'checkout';

export function reducers(state: CheckoutState |undefined, action: Action) {
  return combineReducers({
    [fromCountry.CountryFeatureKey]: fromCountry.reducer,
    [fromAddress.AddressFeatureKey]: fromAddress.reducer,
    [fromCheckout.CheckoutPaymentFeatureKey]: fromCheckout.reducer
  })(state, action);
}

export interface CheckoutState {
  [fromCountry.CountryFeatureKey]: fromCountry.State;
  [fromAddress.AddressFeatureKey]: fromAddress.State;
  [fromCheckout.CheckoutPaymentFeatureKey]: fromCheckout.State;
}

export const selectCheckoutState =
createFeatureSelector<CheckoutState>(CheckoutFeatureKey);


