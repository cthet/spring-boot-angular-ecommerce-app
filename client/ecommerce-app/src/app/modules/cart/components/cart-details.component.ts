import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../models/Cart';
import { CartItem } from '../../../models/CartItem';

@Component({
  selector: 'app-cart-details',
  template: `
  <mat-card class="mat-card">
    <mat-card-title>
      <h3 class="h-3">Votre Livraison</h3>          
    </mat-card-title>
    <hr>
    <article *ngFor="let cartItem of cart?.cartItems">
      <mat-card-content class="cart-content" >
        <div class="d-f">     
            <a>
              <img class="image" src="{{ cartItem.product.image_url }}" />              
            </a>
          <div class="item-info">  
              <div class="d-f j-c-sb">
                <div class="p-r">
                  <div class="d-f m-b">
                      <p class="brand-name">{{cartItem.product.brand_category}}</p> 
                  </div>
                    <div class="f-d item-description">
                      <p>{{cartItem.product.product_category}} / {{cartItem.product.product_name}}</p>
                    </div>
                  <div class="d-f actions">
                    <button type="button" mat-icon-button class="d-f a-i-c j-c-c" (click)="removeOne.emit(cartItem)">
                      <mat-icon>remove</mat-icon>                   
                    </button>
                    <button type="button" mat-icon-button class="d-f a-i-c j-c-c" (click)="addOne.emit(cartItem)">
                      <mat-icon>add</mat-icon>                 
                    </button>
                  </div>
                  <div class="d-f actions">
                    <button [ngStyle]="{'background-color': backgroundColor, 'color':fontColor}" type="button" mat-raised-button class="d-f j-c-c del-btn" (click)="remove.emit(cartItem)">
                      <span>Supprimer</span>
                    </button>
                  <button type="button" mat-icon-button class="d-f a-i-c j-c-c favorite-btn">
                    <mat-icon>favorite</mat-icon>
                    <span class="ms-2">Déplacer vers mes envies</span>   
                  </button>                    
                </div>
              </div>
              <div class="item-price t-a-r">
                <p class="t-t-u">Prix: {{cartItem.product.unit_price |currency: 'EUR'}}</p>
              </div>   
              <div class="item-price t-a-r">
                <p class="t-t-u">Quantité: {{cartItem.quantity}}</p>
              </div>   
              <div class="item-price t-a-r">
                <p class="t-t-u">Prix total: {{cartItem.amount | currency: 'EUR'}}</p>
              </div>   
            </div>              
            </div>
            </div>
      </mat-card-content>
    </article>
  </mat-card>
`,
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  backgroundColor:string = "#000";
  fontColor: string = "#f1f1f1";

  @Input() cart!: Cart | null;

  @Output() addOne = new EventEmitter<CartItem>();
  @Output() removeOne = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

}
