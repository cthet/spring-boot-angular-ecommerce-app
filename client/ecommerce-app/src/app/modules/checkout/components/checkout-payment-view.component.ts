import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { left } from '@popperjs/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout-payment-view',
  templateUrl: './checkout-payment-view.component.html',
  styleUrls: ['./checkout-payment-view.component.css']
})
export class CheckoutPaymentViewComponent implements OnInit {
  backgroundColor:string = "#000";
  fontColor: string = "#f1f1f1";
  @Input() paymentFormGroup!: FormGroup;
  @Output() onSubmit = new EventEmitter();
  stripe = Stripe(environment.stripePublishableKey);
  cardElement: any;

  
  constructor() { }

  ngOnInit() {    
    const appearance = {
      theme: 'stripe'
    };
    const elements = this.stripe.elements({appearance});

    this.cardElement = elements.create('card', {
      hidePostalCode: true,
      style: {
        base: {
          textAlign: 'left',

          border: '1px solid #000',
          iconColor: '#000',
          color: '#000',
          fontWeight: '500',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {
            color: '#fce883',
          },
          '::placeholder': {
            color: '#888',
          },
        },
        invalid: {
          iconColor: 'red',
          color: 'red',
        },
      },      
    }
      );
        // Add an instance of card UI component into the 'card-element' div
        this.cardElement.mount('#card-element');
  }
}
