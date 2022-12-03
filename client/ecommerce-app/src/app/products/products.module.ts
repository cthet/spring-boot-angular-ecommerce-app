// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductsRoutingModule } from './products-routing.module';
// import { ProductsPageComponent } from '../modules/brand/containers/brand-page.component';
// import { StoreModule } from '@ngrx/store';
// import { HomePageComponent } from '../modules/home/containers/home-page.component';
// import { EffectsModule } from '@ngrx/effects';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { ProductsCategoryComponent } from '../modules/brand/components/products-category.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatCardModule } from '@angular/material/card';
// import { BrandComponent } from '../modules/brand/components/brand.component';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatButtonModule } from '@angular/material/button';
// import { SharedModule } from '../shared/shared.module';
// import { ProductsFeatureKey, reducers } from './store/index';
// import { HomeEffects } from '../modules/home/store/home.effects';
// import { ProductsCategoryEffects } from '../modules/brand/store/effects/categories.effects';
// import { ProductsEffects } from './store/effects/products.effects';

// export const COMPONENTS = [
// ];

// export const CONTAINERS = [
// ];
// @NgModule({
//     declarations: [COMPONENTS, CONTAINERS],
//     imports: [
//         CommonModule,
//         ProductsRoutingModule,
//         NgbModule,
//         MatCheckboxModule,
//         MatCardModule,
//         MatRadioModule,
//         SharedModule,
//         MatButtonModule,
//         StoreModule.forFeature(ProductsFeatureKey, reducers),
//         EffectsModule.forFeature([
//             HomeEffects,
//             ProductsEffects,
//             ProductsCategoryEffects,
//         ]),
//     ]
// })
// export class ProductsModule {}
