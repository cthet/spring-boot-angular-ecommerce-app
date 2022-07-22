import { Component, OnInit } from '@angular/core';
import { PaymentInfo } from 'src/app/models/payment-info';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-payment',
  templateUrl: './check-payment.component.html',
  styleUrls: ['./check-payment.component.css'],
})
export class CheckPaymentComponent implements OnInit {
  stripe = Stripe(environment.stripePublishableKey);

  paymentInfo: PaymentInfo = new PaymentInfo();
  error: string = '';

  constructor() {}

  ngOnInit(): void {}
}
