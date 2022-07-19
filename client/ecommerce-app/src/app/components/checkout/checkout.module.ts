import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckIdComponent } from './check-id/check-id.component';
import { CheckAddressComponent } from './check-address/check-address.component';
import { CheckPaymentComponent } from './check-payment/check-payment.component';

@NgModule({
  declarations: [CheckoutComponent, CheckIdComponent, CheckAddressComponent, CheckPaymentComponent],
  imports: [CommonModule],
})
export class CheckoutModule {}
