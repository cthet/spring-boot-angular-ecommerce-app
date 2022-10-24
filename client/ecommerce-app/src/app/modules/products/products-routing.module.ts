import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'marques',
        component: BrandsComponent,
      },
      {
        path: 'marques/:brand',
        component: ProductsListComponent,
      },
      {
        path: 'pret-a-porter',
        component: ProductsListComponent,
      },
      {
        path: 'pret-a-porter/:category',
        component: ProductsListComponent,
      },
    ],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../../modules/cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
