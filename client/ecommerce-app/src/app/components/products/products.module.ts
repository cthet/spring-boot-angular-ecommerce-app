import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

import { ProductsComponent } from './products.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductsCategoryComponent,
  ],
  imports: [FormsModule, CommonModule, MatRadioModule],
})
export class ProductsModule {}
