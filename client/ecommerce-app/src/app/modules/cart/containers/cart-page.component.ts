import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../../../models/cart';
import { CartItem } from '../../../models/cart-Item';
import { cartActions, imageActions, videoActions } from '../../../store/actions';
import { cartSelectors } from '../../../store/selectors';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
  <app-navbar-page></app-navbar-page>
  <app-cart-details 
  [cart]="cart$ | async"
  (addOne)="addOne($event)"
  (removeOne)="removeOne($event)"></app-cart-details>
  `,
})
export class CartPageComponent implements OnInit {
  cart$!: Observable<Cart | null>;

  constructor(private store: Store<Store>) {
    this.cart$ = this.store.select(cartSelectors.selectCart);
  }

  ngOnInit(): void {
    this.store.dispatch(imageActions.removeImage());
    this.store.dispatch(videoActions.removeVideo());
  }

  addOne(cartItem: CartItem) {    
    const cartItemUpdated: Update<CartItem> = {
      id: cartItem?.item.id!,
      changes: {
        item: cartItem.item,
        quantity: cartItem.quantity! + 1,
        amount: cartItem.amount + cartItem.item.unit_price
      },
    };
    this.store.dispatch(cartActions.updateCartItem({update: cartItemUpdated}));
  };

  removeOne(cartItem: CartItem) {    
    if(cartItem.quantity>1){
      const cartItemUpdated: Update<CartItem> = {
        id: cartItem?.item.id!,
        changes: {
          item: cartItem?.item,
          quantity: cartItem?.quantity! - 1,
          amount: cartItem.amount - cartItem.item.unit_price
        },
      };
      this.store.dispatch(cartActions.updateCartItem({update: cartItemUpdated}));
    } else {
      this.store.dispatch(cartActions.deleteCartItem({id: cartItem.item.id}));
    }
  }

  // removeFromCart(product: Product) {
  //   this.cartService.removeFromCart(product);
  //   this.cartItems = this.cartService.cartItems;
  // }
}
