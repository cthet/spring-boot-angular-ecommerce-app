import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { cartSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-checkout-cart-page',
  template: `<app-checkout-cart-view [cart]="cart$ | async"></app-checkout-cart-view>`,
})
export class CheckoutCartPageComponent implements OnInit {
  cart$!: Observable<Cart | null>;

  constructor(private store: Store<Store>) { 
    this.cart$ = this.store.select(cartSelectors.selectCart);
  }

  ngOnInit(): void {}

}
