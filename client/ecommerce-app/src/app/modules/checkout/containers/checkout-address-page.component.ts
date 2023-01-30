import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatestWith, map } from 'rxjs';
import { Subscription } from 'rxjs';
import { Observable} from 'rxjs';
import { addressActions } from '../store/actions';
import { addressSelectors } from '../store/selectors';
@Component({
  selector: 'app-checkout-address-page',
  template: `<app-select-address-page *ngIf="typingAddressPage"></app-select-address-page>
  <app-typing-address-page *ngIf="!typingAddressPage"></app-typing-address-page>`,
})
export class CheckoutAddressPageComponent implements OnInit, OnDestroy {
  typingAddressPage!: boolean;
  edit$: Observable<boolean>;
  addressTotal$: Observable<number>;
  routerSubscription!: Subscription;

  constructor(private store: Store<Store>) {
    this.edit$ = this.store.select(addressSelectors.selectEdit);
    this.addressTotal$ = this.store.select(addressSelectors.selectAddressTotal);
  }

  ngOnInit(): void {
  this.store.dispatch(addressActions.loadAddresses());    

  this.routerSubscription = this.edit$.pipe(
   combineLatestWith(this.addressTotal$),
   map(([edit, addressTotal]) => {
      if(edit || addressTotal === 0) {
        this.typingAddressPage = false;
      } else {
        this.typingAddressPage = true;
      }
    })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }


}
