import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApparelCategoryPageComponent } from './containers/apparel-category-page.component';
import { ApparelCategoryProductsPageComponent } from './containers/apparel-category-products-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApparelCategoryPageComponent,  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApparelCategoryRoutingModule { }
