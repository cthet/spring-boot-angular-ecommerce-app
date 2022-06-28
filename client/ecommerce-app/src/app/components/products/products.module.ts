import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsCategoryMenuComponent } from './products-category-menu/products-category-menu.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent,
    ProductsCategoryMenuComponent,
  ],
  imports: [CommonModule],
})
export class ProductsModule {}
