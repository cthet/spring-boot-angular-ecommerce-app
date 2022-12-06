import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empty-cart-view',
  template: `
  <div class="cart-details-container">
    <div class="cart-details-wrapper">
    <mat-card class="mat-card">
      <mat-card-content>
        <p class="cart-content">Votre panier est vide</p>
        <button type="button" class="btn-continue" (click)="continue.emit()">
          Continuer
        </button>
      </mat-card-content>
    </mat-card>
    </div>
    </div>
    `,
  styleUrls: ['./empty-cart-view.component.css']
})
export class EmptyCartViewComponent {
  @Output() continue = new EventEmitter<void>();

}
