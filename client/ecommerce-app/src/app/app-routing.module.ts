import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './modules/products/notfound/notfound.component';
import { GenderGuard } from './modules/utility/gender.guards';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // {
  //   path: 'product',
  //   loadChildren: () =>
  //   import('./modules/product/product.module').then(
  //     (mod) => mod.ProductModule
  //   ),
  // },
  {
    path: ':gender',
    canActivate: [GenderGuard],
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (mod) => mod.ProductsModule
      ),
  },  

  // {
  //   path: 'profile',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/profile/profile.module').then(
  //       (mod) => mod.ProfileModule
  //     ),
  // },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
