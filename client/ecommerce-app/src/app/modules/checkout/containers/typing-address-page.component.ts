import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { Address, AddressBuilder } from 'src/app/models/Address';
import { Civility } from 'src/app/models/Civility';
import { Country } from 'src/app/models/Country';
import { loadCountries } from 'src/app/modules/checkout/store/actions/country.actions';
import { addressActions } from '../store/actions';
import { addressSelectors, countrySelectors } from '../store/selectors';
import { selectEditAddress } from '../store/selectors/address.selectors';

@Component({
  selector: 'app-typing-address-page',
  template: ` <app-address-view
    [address]="addressForm"
    [editAddress]="editAddress$ | async"
    [countries]="listCountries$ | async"
    [addressTotal]="addressTotal$ | async"
    (save)="saveAddress()"
    (update)="updateAddress()"
    (cancel)="cancelEdit()"
  >
  </app-address-view>`,
})
export class TypingAddressPageComponent implements OnInit, OnDestroy {
  addressForm!: FormGroup;
  address$!: Observable<Address | null>;
  listCountries$!: Observable<Country[]>;
  editAddress$!: Observable<Address | null>;
  addressTotal$: Observable<number>;
  subscription!: Subscription;

  constructor(private store: Store<Store>) {
    this.listCountries$ = this.store.select(countrySelectors.selectCountries);
    this.editAddress$ = this.store.select(addressSelectors.selectEditAddress);
    this.addressTotal$ = this.store.select(addressSelectors.selectAddressTotal);
    this.addressForm = new FormGroup({
      civility: new FormControl<Civility>(
        new Civility({ id: 2 }),
        Validators.required
      ),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      addressComplement: new FormControl(''),
      postCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl<Country>(new Country({}), [
        Validators.required,
        this.validCountry(),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.subscription = this.store
      .select(selectEditAddress)
      .pipe(take(1))
      .subscribe((address: Address | null) => {
        if (address != null) {
          //when editing an address
          this.addressForm.setValue({
            civility: address?.civility,
            firstName: address?.firstName,
            lastName: address?.lastName,
            street: address?.street,
            addressComplement: address?.addressComplement,
            postCode: address?.postCode,
            city: address?.city,
            country: address?.country,
            phoneNumber: address?.phoneNumber,
          });
        }
      });
  }

  validCountry(): ValidatorFn {
    return (control: AbstractControl): { [reason: string]: any } | null =>
      control.value?.id != undefined
        ? null
        : { countryIsUndefined: control.value };
  }

  saveAddress() {
    const address = new AddressBuilder(this.addressForm.value).setId(0).build(); //build a new Address that does not exist in database
    this.store.dispatch(
      addressActions.saveAddress({
        address: JSON.parse(JSON.stringify(address)),
      })
    );
  }

  updateAddress() {
    this.subscription = this.store
      .select(selectEditAddress)
      .pipe(take(1))
      .subscribe((addressFromStore) => {
        const address = new AddressBuilder(this.addressForm.value)
          .setId(addressFromStore!.id)
          .build(); //build an existing Address from the database
        this.store.dispatch(
          addressActions.updateAddress({
            address: JSON.parse(JSON.stringify(address)),
          })
        );
      });
  }

  cancelEdit() {
    this.store.dispatch(addressActions.cancelEditAddress());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
