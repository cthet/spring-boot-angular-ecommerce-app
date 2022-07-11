import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailsComponent } from './cart-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartDetailsRoutingModule } from './cart-details-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CartDetailsRoutingModule,
  ],
})
export class CartDetailsModule {}
