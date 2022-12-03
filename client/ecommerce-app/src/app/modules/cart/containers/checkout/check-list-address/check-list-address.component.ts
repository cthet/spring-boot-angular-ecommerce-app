import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Address } from 'src/app/cart/models/address';
import { Country } from 'src/app/cart/models/country';
import { CheckoutService } from 'src/app/modules/services/checkout.service';
import { UserService } from 'src/app/profile/services/user.service';

@Component({
  selector: 'app-check-list-address',
  templateUrl: './check-list-address.component.html',
  styleUrls: ['./check-list-address.component.css'],
})
export class CheckListAddressComponent implements OnInit {
  addresses!: Address[];
  addressFormEdit: boolean = false;

  addressForm!: FormGroup;
  countries = new Observable<Country[]>();
  isLoading = false;
  message: string = '';
  error: string = '';

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService
  ) {}

  @Output() next = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.fetchAddresses();
    this.fetchCountries();
    this.computeAddressForm();
  }

  //fetch user's addresslist
  fetchAddresses() {
    this.userService.getListAddress().subscribe({
      next: (addresses: Address[]) => {
        this.addresses = addresses;
        console.log(addresses);
      },
      error: () => {
        const address = {
          id: 0,
          country: '',
          postCode: 0,
          city: '',
          street: '',
        };
        this.addresses = [address];
      },
    });
  }

  fetchCountries() {
    this.countries = this.checkoutService.getCountries();
  }

  computeAddressForm() {
    this.addressForm = new FormGroup({
      country: new FormControl(null, [Validators.required]),
      postCode: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      city: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
    });
  }

  //allow to check if user's addresslist is empty
  emptyAddressList() {
    const emptyAdress = [
      { id: 0, country: '', postCode: 0, city: '', street: '' },
    ];
    return this.addresses === emptyAdress;
  }

  //when user select a known address
  onSelectAddress(address: Address) {
    this.checkoutService.address$.next(address);
    this.message = 'Shipping address successfully added !';

    this.next.emit(true);
  }

  onAddAddress() {
    this.addressFormEdit = !this.addressFormEdit;
    this.message = '';
  }

  //when user valid the address form
  onSelectAddressForm() {
    this.isLoading = true;

    let address = new Address();
    address[`id`] = 0;
    address[`country`] = this.addressForm.value.country;
    address[`postCode`] = this.addressForm.value.postCode;
    address[`city`] = this.addressForm.value.city;
    address[`street`] = this.addressForm.value.street;

    this.checkoutService.address$.next(address);

    this.userService.addAddress(address).subscribe({
      next: (message: any) => {
        this.isLoading = false;
        this.next.emit(true);
        this.message = message.message;
      },
      error: (err: Error) => {
        this.isLoading = false;
        this.error = err.message;
      },
    });

    this.addressForm.reset();
  }

  onHandleError() {
    this.error = '';
  }
}
