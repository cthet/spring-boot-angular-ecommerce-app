import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartDetailsRoutingModule } from './cart-details-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CartDetailsComponent } from './cart-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartDetailsComponent, CheckoutComponent],
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CartDetailsRoutingModule,
    RouterModule,
  ],
})
export class CartDetailsModule {}
