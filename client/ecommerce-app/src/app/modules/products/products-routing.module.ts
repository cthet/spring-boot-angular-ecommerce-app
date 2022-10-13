import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { ReadyToWearComponent } from './ready-to-wear/ready-to-wear.component';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home/home.component';
import { GenderGuard } from '../utility/gender.guards';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [GenderGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'brands',
        component: BrandsComponent,
      },
      {
        path: 'ready-to-wear',
        component: ReadyToWearComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
