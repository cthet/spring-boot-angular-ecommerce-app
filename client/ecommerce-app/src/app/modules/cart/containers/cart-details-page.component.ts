import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';
import { cartActions } from 'src/app/store/actions';
import { cartSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-cart-details-page',
  template: `
  <div class="cart-details-container">  
    <div class="cart-details-wrapper">
      <app-cart-details
        [cart]="cart$ | async"
        (addOne)="addOne($event)"
        (removeOne)="removeOne($event)"
        (remove)="remove($event)">
      </app-cart-details>
      <app-cart-price
       [cart] = "cart$ | async"
       (checkout) = "checkout()">        
      </app-cart-price>
    </div>
  </div>
  `,
  styles: [`
  .cart-details-container {
    margin-top: 140px;
    height: 100%;
    background-color: #faf8f6;  
  }  
  .cart-details-wrapper{
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 67rem;
  }
`]  ,
})
export class CartDetailsPageComponent implements OnInit {
  cart$!: Observable<Cart | null>;

  constructor(private store: Store<Store>, private router: Router) {
    this.cart$ = this.store.select(cartSelectors.selectCart);
  }

  ngOnInit(): void {}

  addOne(cartItem: CartItem) {    
    const cartItemUpdated: Update<CartItem> = {
      id: cartItem?.product.id!,
      changes: {
        product: cartItem.product,
        quantity: cartItem.quantity! + 1,
        amount: cartItem.amount + cartItem.product.unit_price
      },
    };
    this.store.dispatch(cartActions.updateCartItem({update: cartItemUpdated}));
  };

  removeOne(cartItem: CartItem) {    
    if(cartItem.quantity>1){
      const cartItemUpdated: Update<CartItem> = {
        id: cartItem?.product.id!,
        changes: {
          product: cartItem?.product,
          quantity: cartItem?.quantity! - 1,
          amount: cartItem.amount - cartItem.product.unit_price
        },
      };
      this.store.dispatch(cartActions.updateCartItem({update: cartItemUpdated}));
    } else {
      this.store.dispatch(cartActions.deleteCartItem({id: cartItem.product.id}));
    }
  }

  remove(cartItem: CartItem) {
    this.store.dispatch(cartActions.deleteCartItem({id: cartItem.product.id}));
  }

  checkout() {
    this.router.navigate(['/commande']);
  }
}
