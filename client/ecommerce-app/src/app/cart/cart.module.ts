import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details.component';

export const COMPONENTS = [CartComponent, CartDetailsComponent];

export const CONTAINERS = [];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [CommonModule, CartRoutingModule, MatCardModule, SharedModule],
})
export class CartModule {}
