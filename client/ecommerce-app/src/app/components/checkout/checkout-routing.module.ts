import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckIdComponent } from './check-id/check-id.component';
import { CheckListAddressComponent } from './check-list-address/check-list-address.component';
import { CheckPaymentComponent } from './check-payment/check-payment.component';
import { CheckReviewComponent } from './check-review/check-review.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
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
