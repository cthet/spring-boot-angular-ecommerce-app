import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', redirectTo: 'products/:gender', pathMatch: 'full' },
  { path: 'products/:gender', component: ProductsComponent },
  { path: 'products/:gender/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
