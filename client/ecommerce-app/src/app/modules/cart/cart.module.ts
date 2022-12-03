import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details.component';
import { CartPageComponent } from './containers/cart-page.component';

export const COMPONENTS = [CartDetailsComponent];

export const CONTAINERS = [CartPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [CommonModule, CartRoutingModule, MatCardModule, SharedModule],
})
export class CartModule {}
