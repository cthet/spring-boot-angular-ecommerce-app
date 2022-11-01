import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from 'src/app/modules/shared/alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { ApparelCategoryPipe } from 'src/app/utility/pipes/apparelCategoryPipe';
import { BrandPipe } from 'src/app/utility/pipes/brandsPipe';
import { HyphenPipe } from 'src/app/utility/pipes/hyphenPipe';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    HyphenPipe,
    BrandPipe,
    ApparelCategoryPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [AlertComponent, NavbarComponent],
})
export class SharedModule {}
