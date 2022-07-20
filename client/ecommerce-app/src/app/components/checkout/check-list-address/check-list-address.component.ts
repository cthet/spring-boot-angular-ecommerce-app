import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.FetchAddresses();
  }

  FetchAddresses() {
    this.userService.getListAddress().subscribe((response: Address[]) => {
      this.addresses = response;
    });
  }

  selectAddress(address: Address) {
    console.log(address);
    this.checkoutService.address.next(address);
    this.router.navigate(['checkout/payment']);
  }
}
