import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) {}

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
