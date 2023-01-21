import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { Country } from 'src/app/models/Country';
import { Order } from 'src/app/models/Order';
import { OrderItem } from 'src/app/models/orderItem';
import { PaymentInfo } from 'src/app/models/Payment-info';
import { User } from 'src/app/modules/auth/interfaces/User';

import { CartService } from 'src/app/modules/services/cart.service';
import { CheckoutService } from 'src/app/modules/services/checkout.service';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-check-payment',
  templateUrl: './check-payment.component.html',
  styleUrls: ['./check-payment.component.css'],
})
export class CheckPaymentComponent implements OnInit, AfterViewInit {
  stripe = Stripe(environment.stripePublishableKey);
  paymentInfo: PaymentInfo = new PaymentInfo();
  creditCard!: FormGroup;
  cardElement: any;

  orderRequest: OrderRequest = {
    user: { firstName: '', lastName: '' },
    shippingAddress: new Address(),
    order: new Order(),
    orderItems: [],
  };

  totalPrice!: number;
  totalQuantity!: number;
  email!: string;
  user!: User;
  address!: Address;
  code: string = '';

  shippingAddress!: Address;
  order!: Order;
  orderItems!: OrderItem[];

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
    this.setOrderRequest();
    this.setupStripePaymentForm();
  }

  setupStripePaymentForm() {
    let elements = this.stripe.elements();

    this.cardElement = elements.create('card', { hidePostalCode: true });

    this.cardElement.mount('#card-element');

    this.cardElement.on('change', (event: any) => {
      this.displayError = document.getElementById('card-errors');

      if (event.complete) {
        this.error = '';
      } else if (event.error) {
        this.error = event.error.message;
      }
    });
  }

  setOrderRequest() {
    //fetch cart data
    this.cartService.totalPrice$.subscribe((totalPrice) => {
      this.cartService.totalQuantity$.subscribe((totalQuantity) => {
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.orderRequest['order'] = {
          totalPrice: this.totalPrice,
          totalQuantity: this.totalQuantity,
        };
      });
    });

    //fetch user data
    this.checkoutService.user$.subscribe((user: User) => {
      this.user = user;
      this.orderRequest['user'] = user;
    });
    //add user email
    const auth_user = this.tokenstorage.getUser;

    //fetch address details
    this.checkoutService.address$.subscribe((address: Address) => {
      this.address = address;
      this.orderRequest['shippingAddress'] = this.address;

      //get country code from country name
      this.checkoutService.getCountries().subscribe((countries: Country[]) => {
        this.code = countries.filter(
          (country) => country.name == this.address.country
        )[0].code;
      });
    });

    this.orderRequest['orderItems'] = this.cartService.cartItems.map(
      (cartItem) =>
        new OrderItem(
          cartItem.quantity,
          cartItem.quantity * cartItem.item.unit_price,
          cartItem.item
        )
    );
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
                    country: this.code,
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
                  alert(response.message);
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
