import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        component: CartDetailsComponent,
      },
      // {
      //   path: 'checkout',
      //   canActivate: [AuthGuard],
      //   loadChildren: () =>
      //     import('../checkout/checkout.module').then(
      //       (mod) => mod.CheckoutModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
