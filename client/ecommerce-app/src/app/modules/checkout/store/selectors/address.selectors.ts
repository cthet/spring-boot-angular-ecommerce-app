import { createSelector } from "@ngrx/store";
import { selectCheckoutState } from "..";
import * as fromAddress from '../reducers/address.reducer'

export const selectAddressState = createSelector(
  selectCheckoutState,
  (state) => state.address
)


export const selectAddressEntities = createSelector(
  selectAddressState,
  fromAddress.selectAddressEntities
);

export const selectAllAddresses = createSelector(
  selectAddressState,
  fromAddress.selectAllAddress
);

export const selectAddressTotal = createSelector(
  selectAddressState,
  fromAddress.selectAddressTotal
);

export const selectShippingAddress = createSelector(
  selectAddressState,
  fromAddress.getSelectedAddress
);

export const selectEdit = createSelector(
  selectAddressState,
  fromAddress.getEdit
);

export const selectEditAddress = createSelector(
  selectAddressState,
  fromAddress.getEditAddress
);

export const selectAddressError = createSelector(
  selectAddressState,
  fromAddress.getError
);

export const selectAddressStatus = createSelector(
  selectAddressState,
  fromAddress.getStatus
);


