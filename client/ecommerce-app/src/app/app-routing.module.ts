import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: ':gender',
    loadChildren: () =>
      import('./modules/gender/gender.module').then((mod) => mod.GenderModule),
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
