import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/models/address';
import { CartItem } from 'src/app/models/cart-Item';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/orderItem';
import { OrderRequest } from 'src/app/models/orderRequest';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-check-review',
  templateUrl: './check-review.component.html',
  styleUrls: ['./check-review.component.css'],
})
export class CheckReviewComponent implements OnInit {
  orderRequest!: OrderRequest;
  user!: User;
  shippingAddress!: Address;
  order: Order = { totalPrice: 0, totalQuantity: 0 };
  orderItems!: OrderItem[];

  @Output() next= new EventEmitter<boolean>;

  constructor(
    private checkoutService: CheckoutService,
    private CartService: CartService
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

    this.orderItems = this.CartService.cartItems.map(
      (cartItem) =>
        new OrderItem(
          cartItem.quantity,
          cartItem.quantity * cartItem.item.unit_price,
          cartItem.item
        )
    );
    this.CartService.totalPrice$.subscribe((data) => {
      this.order.totalPrice = data;
    });
    this.CartService.totalQuantity$.subscribe((data) => {
      this.order.totalQuantity = data;
    });
  }

  onConfirmCheckout() {
    this.next.emit(true);
  }
}
