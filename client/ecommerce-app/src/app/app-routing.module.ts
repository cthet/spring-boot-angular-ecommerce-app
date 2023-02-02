import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound.component';
import { ApparelCategoryGuard } from './utility/guards/apparelCategory.guard';
import { AuthGuard } from './utility/guards/auth.guard';
import { BrandGuard } from './utility/guards/brand.guard';
import { GenderGuard } from './utility/guards/gender.guard';
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
        path: ':gender/pret-a-porter/:category',
        canActivate: [ApparelCategoryGuard],
        loadChildren: () =>
        import('./modules/apparel-category/apparel-category.module').then((mod) => mod.ApparelCategoryModule),
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



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
