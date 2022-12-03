import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApparelCategoryPipe } from './pipes/apparelCategoryPipe';
import { BrandPipe } from './pipes/brandsPipe';
import { HyphenPipe } from './pipes/hyphenPipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar.component';
import { ProductComponent } from './components/product.component';
import { ProductsCategoryComponent } from './components/products-category.component';
import { ProductsListComponent } from './components/products-list.component';
import { SortProductsComponent } from './components/sort-products.component';
import { NavbarPageComponent } from './containers/navbar-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProductPageComponent } from './containers/product-page.component';

export const COMPONENTS = [
  NavbarComponent,
  ProductComponent,
  ProductsCategoryComponent,
  ProductsListComponent,
  SortProductsComponent,
  HyphenPipe,
  BrandPipe,
  ApparelCategoryPipe,  
];

export const CONTAINERS = [NavbarPageComponent, ProductPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule, 
    NgbModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [COMPONENTS, CONTAINERS],
})
export class SharedModule {}
