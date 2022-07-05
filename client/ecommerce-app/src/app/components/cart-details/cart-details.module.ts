import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartDetailsComponent } from './cart-details.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CartDetailsComponent],
  imports: [MatTableModule, MatCardModule, CommonModule],
})
export class CartDetailsModule {}
