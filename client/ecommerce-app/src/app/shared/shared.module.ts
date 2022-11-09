import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { ApparelCategoryPipe } from 'src/app/utility/pipes/apparelCategoryPipe';
import { BrandPipe } from 'src/app/utility/pipes/brandsPipe';
import { HyphenPipe } from 'src/app/utility/pipes/hyphenPipe';
import { NavbarComponent } from './components/navbar.component';
import { NavbarPageComponent } from './containers/navbar-page.components';
import { StoreModule } from '@ngrx/store';
import * as fromNavbar from './reducers/index'

export const COMPONENTS = [
  NavbarComponent,
  HyphenPipe,
  BrandPipe,
  ApparelCategoryPipe,
];

export const CONTAINERS = [NavbarPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(
      fromNavbar.NavbarFeatureKey,
      fromNavbar.reducers
    ),
  ],
  exports: [COMPONENTS, CONTAINERS],
})
export class SharedModule {}
