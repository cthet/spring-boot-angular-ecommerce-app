import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  template: `
    <div class="main">
      <div *ngFor="let product of products">
        <mat-card
          *ngIf="product.active"
          class="custom"
          (click)="set.emit(product)"
          routerLink="/{{ product.gender_category }}/{{
            product.brand_category | HyphenateCase
          }}/{{ product.product_category | HyphenateCase }}/{{
            product.product_name | HyphenateCase
          }}"
        >
          <img
            mat-card-image
            [src]="[product.image_url]"
            [alt]="[product.product_name]"
          />
          <div class="middle">
            <div class="text-middle">Voir détails</div>
          </div>
          <mat-card-content>
            <h6 class="title">{{ product.brand_category }}</h6>
            <p class="price">
              {{ product.unit_price | currency: 'EUR' }}
            </p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products!: Product[] | null;

  @Output() set = new EventEmitter<Product>();
}
