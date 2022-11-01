import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './modules/products/notfound/notfound.component';
import { AuthGuard } from './utility/guards/auth.guard';
import { GenderGuard } from './utility/guards/gender.guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profil',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (mod) => mod.ProfileModule
      ),
  },
  {
    path: 'panier',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: ':gender',
    canActivate: [GenderGuard],
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (mod) => mod.ProductsModule
      ),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
