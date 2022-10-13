import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/modules/interfaces/models/address';
import { CartItem } from 'src/app/modules/interfaces/models/cart-Item';
import { Order } from 'src/app/modules/interfaces/models/order';
import { OrderItem } from 'src/app/modules/interfaces/models/orderItem';
import { OrderRequest } from 'src/app/modules/interfaces/models/orderRequest';
import { User } from 'src/app/modules/interfaces/models/user';
import { CartService } from 'src/app/modules/services/cart.service';
import { CheckoutService } from 'src/app/modules/services/checkout.service';

@Component({
  selector: 'app-check-review',
  templateUrl: './check-review.component.html',
  styleUrls: ['./check-review.component.css'],
})
export class CheckReviewComponent implements OnInit {
  user!: User;
  shippingAddress!: Address;
  orderItems!: OrderItem[];
  order: Order = { totalPrice: 0, totalQuantity: 0 };

  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchCheckout();
  }

  fetchCheckout() {
    this.checkoutService.user$.subscribe((data) => {
      this.user = data;
    });
    this.checkoutService.address$.subscribe((address) => {
      this.shippingAddress = address;
    });

    this.orderItems = this.cartService.cartItems.map(
      (cartItem) =>
        new OrderItem(
          cartItem.quantity,
          cartItem.quantity * cartItem.item.unit_price,
          cartItem.item
        )
    );
    this.cartService.totalPrice$.subscribe((data) => {
      this.order.totalPrice = data;
    });
    this.cartService.totalQuantity$.subscribe((data) => {
      this.order.totalQuantity = data;
    });
  }
}
