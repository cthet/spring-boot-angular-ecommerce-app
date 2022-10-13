import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Address } from 'src/app/modules/interfaces/models/address';
import { Country } from 'src/app/modules/interfaces/models/country';
import { CheckoutService } from 'src/app/modules/services/checkout.service';
import { UserService } from 'src/app/modules/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressForm!: FormGroup;
  userForm: any;
  isLoading = false;
  message: string = '';
  error: string = '';

  countries = new Observable<Country[]>();
  code!: string;

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.fetchCountries();
    this.computeAddressForm();
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

  fetchCountries() {
    this.countries = this.checkoutService.getCountries();
  }

  addAddress() {
    this.isLoading = true;
    let address = new Address();
    address[`country`] = this.addressForm.value.country;
    address[`postCode`] = this.addressForm.value.postCode;
    address[`city`] = this.addressForm.value.city;
    address[`street`] = this.addressForm.value.street;

    this.userService.addAddress(address).subscribe({
      next: (response: { message: string }) => {
        this.isLoading = false;
        this.message = response.message;
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
