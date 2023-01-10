import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsPageComponent } from './containers/cart-details-page.component';
import { CartPageComponent } from './containers/cart-page.component';
import { EmptyCartPageComponent } from './containers/empty-cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    children: [
      {
        path:'vide',
        component: EmptyCartPageComponent
      },

      {
        path:'details',
        component: CartDetailsPageComponent,
      },      
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
