import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './containers/products-page.component';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './containers/home-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductsCategoryComponent } from './components/products-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { BrandComponent } from './components/brand.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { NavbarEffects } from '../shared/effects/navbar.effects';
import { BrandEffects } from './effects/brand.effects';
import { ProductsCategoryEffects } from './effects/product-category.effect';
import { ProductsEffects } from './effects/product-list.effects';
import { HomeComponent } from './components/home.components';
import { ProductsListPageComponent } from './containers/products-list-page.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductPageComponent } from './containers/product-page.component';
import { ProductComponent } from './components/product.component';
import * as fromProducts from './reducers/index';

export const COMPONENTS = [
  HomeComponent,
  ProductsCategoryComponent,
  BrandComponent,
  ProductsListComponent,
  ProductComponent,
];

export const CONTAINERS = [
  HomePageComponent,
  ProductsPageComponent,
  ProductsListPageComponent,
  ProductPageComponent,
];
@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    SharedModule,
    MatButtonModule,
    StoreModule.forFeature(
      fromProducts.ProductsFeatureKey,
      fromProducts.reducers,      
    ),
    // StoreModule.forFeature('header', headerReducer),
    // StoreModule.forFeature('navbar', navbarReducer),
    // StoreModule.forFeature('home', homeReducer),
    // StoreModule.forFeature('categories', productsCategoryReducer),
    // StoreModule.forFeature('brand', brandReducer),
    // StoreModule.forFeature('products', productsReducer),
    // StoreModule.forFeature('product', productReducer),
    // StoreModule.forFeature(
    //   fromCartItems.cartItemsFeatureKey,
    //   fromCartItems.cartItemsReducer
    // ),
    EffectsModule.forFeature([
      NavbarEffects,
      ProductsEffects,
      BrandEffects,
      ProductsCategoryEffects,
    ]),
  ],
})
export class ProductsModule {}
