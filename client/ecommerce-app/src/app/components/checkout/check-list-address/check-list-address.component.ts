import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-list-address',
  templateUrl: './check-list-address.component.html',
  styleUrls: ['./check-list-address.component.css'],
})
export class CheckListAddressComponent implements OnInit {
  addresses!: Address[];
  addressFormEdit: boolean = false;
  message: string = '';

  addressForm!: FormGroup;
  userForm: any;
  isLoading = false;
  error: string = '';

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService
  ) {}

  @Output() next = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.fetchAddresses();
    this.computeAddressForm();
  }

  fetchAddresses() {
    this.userService.getListAddress().subscribe((response: Address[]) => {
      this.addresses = response;
    });
  }

  selectAddress(address: Address) {
    this.checkoutService.address$.next(address);
    this.next.emit(true);
    this.message = 'Shipping address successfully added !';
  }

  onAddAddress() {
    this.addressFormEdit = !this.addressFormEdit;
    this.message = '';
    this.next.emit(false);
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

    this.checkoutService.address$.next(address);

    this.userService.updateAddress(address).subscribe({
      next: (message: any) => {
        this.isLoading = false;
        this.next.emit(true);
        this.message = message.message;
      },
      error: (err: Error) => {
        this.isLoading = false;
        this.error = err.message;
        this.next.emit(false);
      },
    });

    this.addressForm.reset();
  }

  onHandleError() {
    this.error = '';
  }
}
