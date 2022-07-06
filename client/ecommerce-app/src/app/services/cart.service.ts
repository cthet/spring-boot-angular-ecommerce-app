import { NgIfContext } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  max,
  Observable,
  reduce,
  Subject,
  Subscriber,
  Subscription,
} from 'rxjs';
import { CartItem } from '../models/cart-Item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  totalPrice$: Subject<number> = new Subject<number>();
  totalQuantity$: Subject<number> = new Subject<number>();

  cartItems: CartItem[] = [];
  cartItems$: Subject<CartItem[]> = new Subject<CartItem[]>();

  constructor() {}

  addToCart(product: Product): void {
    if (product != null && product.units_in_stock > 0) {
      let productPresentInCart: CartItem | undefined = undefined;

      productPresentInCart = this.cartItems.find(
        (CartItem: CartItem) => CartItem.item.id == product.id
      );

      if (productPresentInCart != undefined) {
        productPresentInCart.quantity++;
      } else {
        this.cartItems.push({ item: product, quantity: 1 });
      }

      this.updateCartStatus();
    }
  }

  removeFromCart(product: Product): void {
    if (product != null) {
      let productPresentInCart: CartItem | undefined;
      productPresentInCart = this.cartItems.find(
        (CartItem: CartItem) =>
          CartItem.item.id == product.id && CartItem.quantity > 0
      );

      if (productPresentInCart != null) {
        this.cartItems
          .filter(
            (currentvalue: CartItem) => currentvalue == productPresentInCart
          )
          .map((currentValue: CartItem) => currentValue.quantity--);

        this.cartItems = this.cartItems.filter(
          (currentvalue: CartItem) => currentvalue.quantity != 0
        );
      }

      this.updateCartStatus();
    }
    return;
  }

  updateCartStatus(): void {
    this.totalPrice = 0;
    this.totalQuantity = 0;

    for (let cartItem of this.cartItems) {
      this.totalPrice += cartItem.quantity * cartItem.item.unit_price;
      this.totalQuantity += cartItem.quantity;
    }
    this.totalPrice$.next(this.totalPrice);
    this.totalQuantity$.next(this.totalQuantity);
  }
}
