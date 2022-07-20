import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckAddressComponent } from './check-address/check-address.component';
import { CheckIdComponent } from './check-id/check-id.component';
import { CheckListAddressComponent } from './check-list-address/check-list-address.component';
import { CheckPaymentComponent } from './check-payment/check-payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: 'checkout', component: CheckIdComponent },
  { path: 'checkout/listAddress', component: CheckListAddressComponent },
  { path: 'checkout/address', component: CheckAddressComponent },
  { path: 'checkout/payment', component: CheckPaymentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
