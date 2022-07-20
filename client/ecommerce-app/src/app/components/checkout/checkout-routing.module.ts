import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckAddressComponent } from './check-address/check-address.component';

const routes: Routes = [
  { path: 'checkout/address', component: CheckAddressComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
