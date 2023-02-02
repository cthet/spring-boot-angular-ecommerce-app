import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApparelCategoryPipe } from '../utility/pipes/apparelCategoryPipe';
import { BrandPipe } from '../utility/pipes/brandsPipe';
import { HyphenPipe } from '../utility/pipes/hyphenPipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar.component';
import { ProductComponent } from './components/product.component';
import { ProductsListComponent } from './components/products-list.component';
import { SortProductsComponent } from './components/sort-products.component';
import { NavbarPageComponent } from './containers/navbar-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProductPageComponent } from './containers/product-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';

export const COMPONENTS = [
  NavbarComponent,
  ProductComponent,
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
    NgxPaginationModule,    
    CommonModule,
    RouterModule,
    MatCardModule, 
    NgbModule,    
    MatExpansionModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [COMPONENTS, CONTAINERS],
})
export class SharedModule {}
