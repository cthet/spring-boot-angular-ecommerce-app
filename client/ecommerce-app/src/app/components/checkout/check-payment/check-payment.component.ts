import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { OrderItem } from 'src/app/models/orderItem';
import { OrderRequest } from 'src/app/models/orderRequest';
import { PaymentInfo } from 'src/app/models/payment-info';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-payment',
  templateUrl: './check-payment.component.html',
  styleUrls: ['./check-payment.component.css'],
})
export class CheckPaymentComponent implements OnInit {
  stripe = Stripe(environment.stripePublishableKey);
  paymentInfo: PaymentInfo = new PaymentInfo();
  creditCard!: FormGroup;
  cardElement: any;

  totalPrice!: number;
  totalQuantity!: number;
  email!: string;
  user!: User;
  address!: Address;
  orderRequest!: OrderRequest;

  error: string = '';
  displayError: any = '';

  checkoutFormGroup: any;

  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private tokenstorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupStripePaymentForm();
    this.fetchUser();
    this.fetchTotalPrice();
    this.fetchAddress();
  }

  setupStripePaymentForm() {
    let elements = this.stripe.elements();

    this.cardElement = elements.create('card');

    this.cardElement.mount('#card-element');

    this.cardElement.on('change', (event: any) => {
      this.displayError = document.getElementById('card-errors');

      if (event.complete) {
        this.displayError.textContent = '';
      } else if (event.error) {
        this.displayError.textContent = event.error.message;
      }
    });
  }

  fetchUser() {
    this.checkoutService.user$.subscribe((user: User) => {
      this.user = user;
    });

    const auth_user = this.tokenstorage.getUser;
    console.log(auth_user);
  }

  fetchTotalPrice() {
    this.cartService.totalPrice$.subscribe((data) => {
      this.totalPrice = data;
    });
  }

  fetchAddress() {
    this.checkoutService.address$.subscribe((address: Address) => {
      this.address = address;
    });
  }

  setOrderRequest() {
    this.orderRequest['user'] = this.user;
    this.orderRequest['shippingAddress'] = this.address;

    this.cartService.totalQuantity$.subscribe((data) => {
      this.totalQuantity = data;
    });
    this.orderRequest['order'] = {
      totalPrice: this.totalPrice,
      totalQuantity: this.totalQuantity,
    };

    this.orderRequest.orderItems = this.cartService.cartItems.map(
      (cartItem) =>
        new OrderItem(
          cartItem.quantity,
          cartItem.quantity * cartItem.item.unit_price,
          cartItem.item
        )
    );
  }

  test() {
    console.log(this.user);
  }

  onSubmit() {
    this.paymentInfo.amount = Math.round(this.totalPrice * 100);
    this.paymentInfo.currency = 'EUR';

    this.checkoutService
      .createPaymentIntent(this.paymentInfo)
      .subscribe((paymentIntentResponse) => {
        this.stripe
          .confirmCardPayment(
            paymentIntentResponse.client_secret,
            {
              payment_method: {
                card: this.cardElement,
                billing_details: {
                  name: `${this.user.firstName} ${this.user.lastName}`,
                  address: {
                    line1: this.address.street,
                    city: this.address.city,
                    postal_code: this.address.postCode,
                    country: this.address.country,
                  },
                },
              },
            },
            { handleActions: false }
          )
          .then((result: any) => {
            if (result.error) {
              alert(`There was an error: ${result.error.message}`);
            } else {
              this.checkoutService.saveOrder(this.orderRequest).subscribe({
                next: (response) => {
                  alert(response);
                  this.resetCart();
                },
                error: (err) => {
                  alert(`There was an error: ${err.message}`);
                },
              });
            }
          });
      });
  }

  resetCart() {
    this.cartService.totalPrice = 0;
    this.cartService.totalQuantity = 0;
  }
}
