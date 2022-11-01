import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { homeReducer } from './home/store/home.reducer';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarEffects } from '../shared/navbar/store/navbar.effects';
import { navbarReducer } from '../shared/navbar/store/navbar.reducer';
import { productsReducer } from './products-list/store/product-list.reducer';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEffects } from './products-list/store/product-list.effects';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsCategoryEffects } from './products-category/store/product-category.effect';
import { productsCategoryReducer } from './products-category/store/product-category.reducer';
import { MatCardModule } from '@angular/material/card';
import { headerReducer } from 'src/app/components/header/store/header.reducer';
import { brandReducer } from './brand/store/brand.reducer';
import { BrandEffects } from './brand/store/brand.effects';
import { BrandComponent } from './brand/brand.component';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    BrandsComponent,
    ProductsListComponent,
    ProductsCategoryComponent,
    BrandComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    SharedModule,
    StoreModule.forFeature('header', headerReducer),
    StoreModule.forFeature('navbar', navbarReducer),
    StoreModule.forFeature('home', homeReducer),
    StoreModule.forFeature('categories', productsCategoryReducer),
    StoreModule.forFeature('brand', brandReducer),
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([
      NavbarEffects,
      ProductsEffects,
      BrandEffects,
      ProductsCategoryEffects,
    ]),
  ],
})
export class ProductsModule {}
