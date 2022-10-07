import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartComponent, CartDetailsComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class CartModule { }
