import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckIdComponent } from './components/check-id/check-id.component';
import { CheckListAddressComponent } from './components/check-list-address/check-list-address.component';
import { CheckPaymentComponent } from './components/check-payment/check-payment.component';
import { CheckReviewComponent } from './components/check-review/check-review.component';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'checkout', component: CheckIdComponent },
  { path: 'checkout/address', component: CheckListAddressComponent },
  { path: 'checkout/review', component: CheckReviewComponent },
  { path: 'checkout/payment', component: CheckPaymentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
