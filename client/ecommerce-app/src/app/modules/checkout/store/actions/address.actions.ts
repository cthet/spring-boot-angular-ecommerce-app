import { createAction, props } from "@ngrx/store";
import { Address } from "src/app/models/Address";

export const loadAddresses = createAction('[Profile/Checkout PageComponent] Load Addresses');

export const loadAddressesSuccess = createAction(
  '[Addresses Effects] Load Addresses Success',
  props<{ addresses: Address[] }>()
);

export const loadAddressesFailure = createAction(
  '[Addresses Effects] Load Addresses Failure',
  props<{ error: string }>()
);

export const saveAddress = createAction('[Address-view Component] Save address', props<{address: Address}>());

export const saveAddressSuccess = createAction('[Address-view Component] Save address Success', props<{address: Address}>());

export const saveAddressFailure = createAction('[Address-view Component] Save address Failure', props<{error: string}>());

export const updateAddress = createAction('[Address-view Component] Update address', props<{address: Address}>());

export const updateAddressSuccess = createAction('[Address-view Component] Update address Success', props<{address: Address}>());

export const updateAddressFailure = createAction('[Address-view Component] Update address Failure', props<{error: string}>());

export const setAddress = createAction('[Checkout Address Page/Profile Component] Set address', props<{address: Address}>());

export const unsetAddress = createAction('[Checkout Address Page/Profile Component] Unset address');

export const editAddress = createAction('[Checkout Address Page/Profile Component] Edit address', props<{address: Address}>());

export const enterNewAddress = createAction('[Checkout Address Page/Profile Component] Enter new address address');

export const cancelEditAddress = createAction('[Checkout Address Page/Profile Component] CancelEdit address');

export const deleteAddress = createAction('[Checkout Address Page/Profile Component] Delete address', props<{id: number}>());

export const deleteAddressSuccess = createAction('[Checkout Address Page/Profile Component] Delete address Success', props<{id: number}>());

export const deleteAddressFailure = createAction('[Checkout Address Page/Profile Component] Delete address Failure', props<{error: string}>());

export const clearAddresses = createAction('[Header Page Component]Clear Addresses');