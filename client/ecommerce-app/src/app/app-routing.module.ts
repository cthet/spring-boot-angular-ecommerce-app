
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound.component';
import { AuthGuard } from './utility/guards/auth.guard';
import { BrandGuard } from './utility/guards/brand.guards';
import { GenderGuard } from './utility/guards/gender.guards';
import { UnAuthGuard } from './utility/guards/unauth.guard';

const routes: Routes = [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((mod) => mod.PagesModule),
      },    
      {
        path: 'connexion',
        canActivate: [UnAuthGuard],
        loadChildren: () =>
          import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/profile/profile.module').then((mod) => mod.ProfileModule),
      },
      {
        path: 'panier',
        loadChildren: () =>
          import('./modules/cart/cart.module').then((mod) => mod.CartModule),
      },
      {
        path: 'commande',
        canActivate: [AuthGuard],
        loadChildren: () =>
        import('./modules/checkout/checkout.module').then((mod) => mod.CheckoutModule),
      },  
      {
        path: ':gender',
        canActivate: [GenderGuard],
        loadChildren: () =>
        import('./modules/home/home.module').then((mod) => mod.HomeModule),
      },   
      {
        path: ':gender/:brand',
        canActivate: [BrandGuard],
        loadChildren: () =>
        import('./modules/brand/brand.module').then((mod) => mod.BrandModule),
      },
      {
        path:'**',
        pathMatch:'full',
        component: PagenotfoundComponent
      },
    ]
       // {
      //   path: ':gender/pret-a-porter/:category',
      //   canActivate: [],
      //   loadChildren: () =>
      //   import('./modules/brand/products.module').then((mod) => mod.ProductsModule),
      // },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
