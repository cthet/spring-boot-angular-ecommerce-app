import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { ReadyToWearComponent } from './ready-to-wear/ready-to-wear.component';
import { HomegenderComponent } from './homegender/homegender.component';
import { GenderComponent } from './gender.component';

const routes: Routes = [
  {
    path: '',
    component: GenderComponent,
    children: [
      {
        path: '',
        component: HomegenderComponent,
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
export class GenderRoutingModule {}
