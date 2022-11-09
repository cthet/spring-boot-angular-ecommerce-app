import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './containers/products-page.component';
import { HomePageComponent } from './containers/home-page.component';
import { ProductsListPageComponent } from './containers/products-list-page.component';
import { ProductPageComponent } from './containers/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'marques/:brand',
        component: ProductsListPageComponent,
      },
      {
        path: 'pret-a-porter/:category',
        component: ProductsListPageComponent,
      },
      {
        path: ':brand/:category/:product',
        component: ProductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
