import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutAddressPageComponent } from './containers/checkout-address-page.component';
import { CheckoutDeliveryPageComponent } from './containers/checkout-delivery-page.component';
import { CheckoutPageComponent } from './containers/checkout-page.component';
import { CheckoutPaiementPageComponent } from './containers/checkout-paiement-page.component';
import { SelectAddressPageComponent } from './containers/select-address-page.component';
import { TypingAddressPageComponent } from './containers/typing-address-page.component';


const routes: Routes = [
  { 
    path: '', 
    component: CheckoutPageComponent,
    children: [
      {
        path: 'addresse', 
        component: CheckoutAddressPageComponent,
        children: [
          {
          path: 'saisir',
          component: TypingAddressPageComponent,
          },
          {
          path: 'selectionner',
          component: SelectAddressPageComponent,
          }
        ]
      },
      {
        path: 'livraison', 
        component:  CheckoutDeliveryPageComponent,
      },
    ]
  },
  {
    path: 'paiement', 
    component:  CheckoutPaiementPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
