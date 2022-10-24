import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { homeReducer } from './home/store/home.reducer';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrandPipe } from '../utility/brandsPipe';
import { HyphenPipe } from '../utility/hyphenPipe';
import { ApparelCategoryPipe } from '../utility/apparelCategoryPipe';

import { NavbarEffects } from './navbar/store/navbar.effects';
import { navbarReducer } from './navbar/store/navbar.reducer';
import { productsReducer } from './products-list/store/product-list.reducer';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEffects } from './products-list/store/product-list.effects';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsCategoryEffects } from './products-category/store/product-category.effect';
import { productsCategoryReducer } from './products-category/store/product-category.reducer';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    BrandsComponent,
    ProductsListComponent,
    ProductsCategoryComponent,
    HyphenPipe,
    BrandPipe,
    ApparelCategoryPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModule,
    MatCheckboxModule,
    MatCardModule,
    StoreModule.forFeature('navbar', navbarReducer),
    StoreModule.forFeature('home', homeReducer),
    StoreModule.forFeature('products', productsReducer),
    StoreModule.forFeature('categories', productsCategoryReducer),
    EffectsModule.forFeature([
      NavbarEffects,
      ProductsEffects,
      ProductsCategoryEffects,
    ]),
  ],
})
export class ProductsModule {}
