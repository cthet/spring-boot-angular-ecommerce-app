import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details.component';
import { CartPageComponent } from './containers/cart-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmptyCartViewComponent } from './components/empty-cart-view.component';
import { EmptyCartPageComponent } from './containers/empty-cart-page.component';
import { CartDetailsPageComponent } from './containers/cart-details-page.component';
import { CartPriceComponent } from './components/cart-price.component';

export const COMPONENTS = [CartDetailsComponent, EmptyCartViewComponent, CartPriceComponent];

export const CONTAINERS = [CartPageComponent, CartDetailsPageComponent, EmptyCartPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS ],
  imports: [CommonModule, CartRoutingModule, MatCardModule, SharedModule, MatButtonModule, MatIconModule],
})
export class CartModule {}
