import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/models/Address';
import { saveAddress, updateAddress, saveAddressSuccess, updateAddressSuccess, saveAddressFailure, updateAddressFailure, cancelEditAddress, editAddress, loadAddresses, loadAddressesFailure, loadAddressesSuccess, setAddress, unsetAddress, enterNewAddress, deleteAddress, deleteAddressFailure, deleteAddressSuccess, clearAddresses } from '../actions/address.actions';

export const AddressFeatureKey = 'address';

export interface State extends EntityState<Address> {
  selectedAddress: Address | null;
  editAddress: Address | null;
  edit: boolean;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>({});

export const initialState: State = adapter.getInitialState({
  selectedAddress: null,
  editAddress: null,
  edit: false,
  error: null,
  status: 'pending',
});

export const reducer = createReducer<State>(
  initialState,

  on(loadAddresses, saveAddress, updateAddress, deleteAddress, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadAddressesSuccess, (state, { addresses }) => {     
    return adapter.upsertMany(addresses, {...state, error: null, status: 'success'})
  }),

  on(loadAddressesFailure, saveAddressFailure, updateAddressFailure, deleteAddressFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(saveAddressSuccess, (state, {address}) => {
    return adapter.addOne(address, {...state, error: null, statut:'success'})
  }),

  on(updateAddressSuccess, (state, {address}) => {
    return adapter.upsertOne(address, {...state, error: null, status:'success'})
  }),

  on(deleteAddressSuccess, (state, {id}) => {
    return adapter.removeOne(id, {...state, error: null, status:'success'})
  }),

  on(setAddress, (state, { address }) => ({
    ...state,
    selectedAddress: address
  })),

  on(unsetAddress, (state) => ({
    ...state,
    selectedAddress: null
  })),

  on(editAddress, (state, { address }) => ({
    ...state,
    editAddress: address,
    edit: true
  })),

  on(cancelEditAddress, (state) => ({
    ...state,
    editAddress: null,
    edit: false
  })),

  on(enterNewAddress, (state) => ({
    ...state,
    editAddress: null,
    edit: true
  })),

  on(clearAddresses, (state) => {
  return adapter.removeAll({...state, selectedAddress: null, editAddress: null, edit:false, error: null, status: 'pending'
  })}),

);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


export const selectAddressIds = selectIds;
export const selectAddressEntities = selectEntities;
export const selectAllAddress = selectAll;
export const selectAddressTotal = selectTotal;


export const getSelectedAddress = (state: State) => state.selectedAddress;
export const getEditAddress = (state: State) => state.editAddress;
export const getEdit = (state: State) => state.edit;
export const getError = (state: State) => state.error;
export const getStatus = (state: State) => state.status;

