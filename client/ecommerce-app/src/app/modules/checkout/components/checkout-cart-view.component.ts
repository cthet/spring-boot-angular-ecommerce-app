import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-checkout-cart-view',
  templateUrl: './checkout-cart-view.component.html',
  styleUrls: ['./checkout-cart-view.component.css']
})
export class CheckoutCartViewComponent implements OnInit {
  @Input() cart!: Cart | null;

  constructor() { }

  ngOnInit(): void {
  }

  get totalQuantity() {
    return this.cart!.totalQuantity;
  }

  get TTC() {
    return this.cart!.totalPrice;
  }

  get TVA(){
    const ttc = this.cart!.totalPrice;
    const ht = ttc / (1 + 0.2);
    return ttc - ht;
  }

}
