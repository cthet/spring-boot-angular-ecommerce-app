import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutPageComponent } from './containers/checkout-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: CheckoutPageComponent,
  }
  ]  
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
