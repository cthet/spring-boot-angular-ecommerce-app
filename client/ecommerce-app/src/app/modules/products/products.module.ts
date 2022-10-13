import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadyToWearComponent } from './ready-to-wear/ready-to-wear.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { productsReducer } from './home/store/home.reducer';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    ReadyToWearComponent,
    BrandsComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('homeImage', productsReducer),
  ],
})
export class ProductsModule {}
