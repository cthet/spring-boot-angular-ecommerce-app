import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './containers/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
  }
  //  children: [{ path: '', component: CartDetailsComponent },
  //{
    // path:'checkout',
    // canActivate: [AuthGuard],
    // loadChildren: () =>
    // import('') 
  //}],
    // {
    //   path: 'checkout',
    //   canActivate: [AuthGuard],
    //   loadChildren: () =>
    //     import('../checkout/checkout.module').then(
    //       (mod) => mod.CheckoutModule
    //     ),
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
