import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

import { ProductsCategoryComponent } from './products-category/products-category.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductsCategoryComponent,
  ],
  imports: [
    MatPaginatorModule,
    FormsModule,
    CommonModule,
    MatRadioModule,
    RouterModule,
    ProductsRoutingModule,
    MatButtonModule,
  ],
})
export class ProductsModule {}
