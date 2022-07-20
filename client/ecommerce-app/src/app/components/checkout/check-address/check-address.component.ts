import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-address',
  templateUrl: './check-address.component.html',
  styleUrls: ['./check-address.component.css'],
})
export class CheckAddressComponent implements OnInit {
  addressForm!: FormGroup;
  userForm: any;
  isLoading = false;
  message: string = '';
  error: string = '';
  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  addAddress() {
    this.isLoading = true;

    let address = new Address();
    address[`country`] = this.addressForm.value.country;
    address[`postCode`] = this.addressForm.value.postCode;
    address[`city`] = this.addressForm.value.city;
    address[`street`] = this.addressForm.value.street;

    this.userService.updateAddress(address).subscribe({
      next: () => {
        this.isLoading = false;
        this.checkoutService.address.next(address);
        this.router.navigate(['checkout/payment']);
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
