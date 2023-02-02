import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap, switchMap } from 'rxjs';
import { addressActions } from '../actions';
import { AddressService } from '../../../services/address.service';


@Injectable()
export class AddressEffects {
  constructor(
    private actions$: Actions,
    private addressService: AddressService,
  ) {}

  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addressActions.loadAddresses),
      mergeMap((action) =>
        this.addressService.fetchListAddress()
          .pipe(
            map((responseAddress) =>
            addressActions.loadAddressesSuccess({
                addresses: responseAddress.addresses,
              })
            ),
            catchError((error) =>
              of(addressActions.loadAddressesFailure({ error: error.message}))
            )
          )
      )
    )
  );

  saveAddress$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addressActions.saveAddress),
      mergeMap((action) =>
        this.addressService.saveAddress(action.address)
          .pipe(
            switchMap((address) => [
            addressActions.saveAddressSuccess({address}),
            addressActions.cancelEditAddress()]),
            catchError((error) =>
              of(addressActions.saveAddressFailure({ error: error.message}))
            )
          )
      )
    )
  );

  updateAddress$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addressActions.updateAddress),
      mergeMap((action) =>
        this.addressService.updateAddress(action.address)
          .pipe(
            switchMap((address) => ([
            addressActions.updateAddressSuccess({address}),
            addressActions.cancelEditAddress()])),
            catchError((error) =>
              of(addressActions.updateAddressFailure({ error: error.message }))
            )
          )
      )
    )
  );

  deleteAddress$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addressActions.deleteAddress),
      mergeMap((action) =>
        this.addressService.deleteAddress(action.id)
          .pipe(
            switchMap((id) => ([
            addressActions.deleteAddressSuccess({id}),
            addressActions.cancelEditAddress()])),
            catchError((error) =>
              of(addressActions.deleteAddressFailure({ error: error.message }))
            )
          )
      )
    )
  );

}

