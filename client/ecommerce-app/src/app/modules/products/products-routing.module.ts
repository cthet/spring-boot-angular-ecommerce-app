import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ApparelCategoriesComponent } from './apparel-categories/apparel-categories.component';

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
        path: 'marques/:brand',
        component: BrandsComponent,
      },
      {
        path: 'pret-a-porter/:category',
        component: ApparelCategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
