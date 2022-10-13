import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../interfaces/models/cart-Item';
import { Product } from '../interfaces/models/product';

const CART_ITEMS = 'cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  totalPrice$: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity$: Subject<number> = new BehaviorSubject<number>(0);

  cartItems: CartItem[] = [];

  constructor() {
    this.getCart();
    this.updateCartStatus();
  }

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
    this.saveCart();
    this.totalPrice = 0;
    this.totalQuantity = 0;

    for (let cartItem of this.cartItems) {
      this.totalPrice += cartItem.quantity * cartItem.item.unit_price;
      this.totalQuantity += cartItem.quantity;
    }
    this.totalPrice$.next(this.totalPrice);
    this.totalQuantity$.next(this.totalQuantity);
  }

  saveCart() {
    window.sessionStorage.setItem(CART_ITEMS, JSON.stringify(this.cartItems));
  }
  getCart() {
    let data = window.sessionStorage.getItem(CART_ITEMS);

    if (data != null) {
      this.cartItems = JSON.parse(data);
    }
  }
}
