import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { productsReducer } from './home/store/home.reducer';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { brandReducer } from './brands/store/brands.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrandsEffects } from './brands/store/brands.effects';
import { ApparelCategoriesComponent } from './apparel-categories/apparel-categories.component';

import { BrandPipe } from '../utility/brandsPipe';
import { HyphenPipe } from '../utility/hyphenPipe';
import { ApparelCategoryPipe } from '../utility/apparelCategoryPipe';

import { apparelCategoriesReducer } from './apparel-categories/store/apparel-categories.reducer';
import { ApparelCategoriesEffect } from './apparel-categories/store/apparel-categories.effects';


@NgModule({
  declarations: [
    ApparelCategoriesComponent,
    ProductsComponent,
    HomeComponent,
    BrandsComponent,
    NavbarComponent,
    HyphenPipe,
    BrandPipe,
    ApparelCategoryPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('homeImage', productsReducer),
    StoreModule.forFeature('brands', brandReducer),
    StoreModule.forFeature('apparelCategories', apparelCategoriesReducer),
    EffectsModule.forFeature([BrandsEffects, ApparelCategoriesEffect]),
  ],
})
export class ProductsModule {}
