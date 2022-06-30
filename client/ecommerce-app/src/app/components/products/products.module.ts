import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

import { ProductsComponent } from './products.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductsCategoryComponent,
    ProductDetailComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatRadioModule,
    RouterModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
