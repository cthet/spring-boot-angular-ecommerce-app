import { NgIfContext } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
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

  addToCart(product: Product) {
    if (product != null && product.units_in_stock > 0) {
      let productPresentInCart: CartItem | undefined = undefined;

      productPresentInCart = this.cartItems.find(
        (CartItem) => CartItem.item.id == product.id
      );

      if (productPresentInCart != undefined) {
        productPresentInCart.quantity++;
      } else {
        this.cartItems.push({ item: product, quantity: 1 });
      }
      this.totalPrice = 0;
      this.totalQuantity = 0;

      this.updateCartStatus();
    }
  }

  updateCartStatus() {
    for (let cartItem of this.cartItems) {
      this.totalPrice += cartItem.quantity * cartItem.item.unit_price;
      this.totalQuantity += cartItem.quantity;
      this.totalPrice$.next(this.totalPrice);
      this.totalQuantity$.next(this.totalQuantity);
    }

    this.cartItems$.next(this.cartItems);
  }
}
