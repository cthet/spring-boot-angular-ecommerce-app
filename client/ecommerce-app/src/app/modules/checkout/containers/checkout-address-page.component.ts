import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { addressActions } from '../store/actions';
import { addressSelectors } from '../store/selectors';

@Component({
  selector: 'app-checkout-address-page',
  template: `
    <app-typing-address-page *ngIf="(edit$ | async) || (addressTotal$ | async) === 0"></app-typing-address-page>
    <app-select-address-page *ngIf="!(edit$ | async) && (addressTotal$ | async) != 0"></app-select-address-page>
  `,
})
export class CheckoutAddressPageComponent implements OnInit {
  edit$: Observable<boolean>;
  addressTotal$: Observable<number>;

  constructor(private store: Store<Store>) {
    this.edit$ = this.store.select(addressSelectors.selectEdit);
    this.addressTotal$ = this.store.select(addressSelectors.selectAddressTotal);
  }

  ngOnInit(): void {
    this.store.dispatch(addressActions.loadAddresses());    
  }

}
