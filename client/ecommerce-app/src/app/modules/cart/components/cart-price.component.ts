import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../models/Cart';

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
      <span class="t-a-r total-price">{{cart?.totalPrice | currency: 'EUR'}}</span>
      </div>
      <button [ngStyle]="{'background-color': backgroundColor, 'color':fontColor}"  type="button" class="d-f btn-cmd" mat-raised-button (click)="checkout.emit()">
        Commander    
      </button>
    </mat-card-content>
  </mat-card>
`,
  styleUrls: ['./cart-price.component.css'],
})
export class CartPriceComponent {
  backgroundColor:string = "#000";
  fontColor: string = "#f1f1f1";

  @Input() cart!: Cart | null;  
  @Output() checkout = new EventEmitter();
}
