import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home.component';
import { AuthGuard } from './utility/guards/auth.guard';
import { GenderGuard } from './utility/guards/gender.guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'profil',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./profile/profile.module').then((mod) => mod.ProfileModule),
  },
  {
    path: 'panier',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: ':gender',
    canActivate: [GenderGuard],
    loadChildren: () =>
     import('./products/products.module').then((mod) => mod.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
