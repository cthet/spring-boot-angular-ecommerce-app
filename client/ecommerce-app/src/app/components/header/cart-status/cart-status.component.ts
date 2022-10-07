import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/models/order';
import { CartService } from 'src/app/modules/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  totalQuantity!: number;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartStatus();
  }

  getCartStatus() {
    this.cartService.totalQuantity$.subscribe((data: number) => {
      this.totalQuantity = data;
    });
  }
}
