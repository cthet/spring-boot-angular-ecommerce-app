import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout-payment-view',
  templateUrl: './checkout-payment-view.component.html',
  styleUrls: ['./checkout-payment-view.component.css']
})
export class CheckoutPaymentViewComponent implements OnInit {
  @Input() paymentFormGroup!: FormGroup;
  @Output() onSubmit = new EventEmitter();
  stripe = Stripe(environment.stripePublishableKey);
  cardElement: any;

  //displayError!: HTMLElement | null;
  
  constructor() { }

  ngOnInit() {    
    let elements = this.stripe.elements();
    this.cardElement = elements.create('card', {hidePostalCode: true});
        // Add an instance of card UI component into the 'card-element' div
        this.cardElement.mount('#card-element');
  }
}
        // Add event binding for the 'change' event on the card element
        // this.cardElement.on('change', (event) => {
    
        //   get a handle to card-errors element
        //   this.displayError = document.getElementById('card-errors');
    
          // if (event.complete) {
          //   this.displayError.textContent = "";
          // } else if (event.error) {
          //   // show validation error to customer
          //   this.displayError.textContent = event.error.message;
          // }

  // onSubmit(){    
  //   this.checkoutService
  //     .createPaymentIntent(this.paymentInfo)
  //     .subscribe((paymentIntentResponse) => {
  //       this.stripe
  //         .confirmCardPayment(
  //           paymentIntentResponse.client_secret,
  //           {
  //             payment_method: {
  //               card: this.cardElement,
  //               billing_details: {
  //                 name: `${this.user.firstName} ${this.user.lastName}`,
  //                 address: {
  //                   line1: this.address.street,
  //                   city: this.address.city,
  //                   postal_code: this.address.postCode,
  //                   country: this.code,
  //                 },
  //               },
  //             },
  //           },
  //           { handleActions: false }
  //         )
  //         .then((result: any) => {
  //           if (result.error) {
  //             alert(`There was an error: ${result.error.message}`);
  //           } else {
  //             this.checkoutService.saveOrder(this.orderRequest).subscribe({
  //               next: (response) => {
  //                 alert(response.message);
  //                 this.resetCart();
  //               },
  //               error: (err) => {
  //                 alert(`There was an error: ${err.message}`);
  //               },
  //             });
  //           }
  //         });
  //     });
  // }

