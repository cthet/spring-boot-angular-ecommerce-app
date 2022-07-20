import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckIdComponent } from './check-id/check-id.component';
import { CheckAddressComponent } from './check-address/check-address.component';
import { CheckPaymentComponent } from './check-payment/check-payment.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileModule } from '../profile/profile.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CheckListAddressComponent } from './check-list-address/check-list-address.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckIdComponent,
    CheckAddressComponent,
    CheckPaymentComponent,
    CheckListAddressComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProfileModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    CheckoutRoutingModule,
  ],
  bootstrap: [CheckIdComponent],
})
export class CheckoutModule {}
