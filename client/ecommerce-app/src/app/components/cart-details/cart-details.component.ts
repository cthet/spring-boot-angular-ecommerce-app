import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-Item';
import { Product } from 'src/app/models/product';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  order: Order = {
    totalPrice: this.cartService.totalPrice,
    totalQuantity: this.cartService.totalQuantity,
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice$.subscribe((data: number) => {
      this.order.totalPrice = data;
    });

    this.cartService.totalQuantity$.subscribe((data: number) => {
      this.order.totalQuantity = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.cartItems;
  }
}
