import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  order: Order = {
    totalPrice: 0,
    totalQuantity: 0,
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartStatus();
  }

  getCartStatus() {
    this.cartService.totalPrice$.subscribe((data: number) => {
      this.order.totalPrice = data;
    });
    this.cartService.totalQuantity$.subscribe((data: number) => {
      this.order.totalQuantity = data;
    });
  }
}
