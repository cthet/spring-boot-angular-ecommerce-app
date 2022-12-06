import { Component, Input } from '@angular/core';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-cart-price',
  template: `
  <mat-card class = "cart-total">
    <mat-card-content>      
      <p class= "d-f delivery-cost">Frais de livraison 
      <span class= "t-a-r"> Offerts</span>
      </p>
      <div class= "d-f total">
      <h4 class= "h-4">Total</h4>
      <span>(taxes locales et livraison incluses)</span>
      <span class="t-a-r total-price">{{cart?.totalPrice}}&nbsp;€</span>
      </div>
      <button type="button" class="d-f btn-cmd" mat-raised-button>
        Commander    
      </button>
    </mat-card-content>
  </mat-card>
`,
  styleUrls: ['./cart-price.component.css'],
})
export class CartPriceComponent {
  @Input() cart!: Cart | null;

}
