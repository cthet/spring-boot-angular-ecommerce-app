import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  template: `
  <div class="product-container">
  <hr />
  <div class="links">
  <ul>
    <li>
      <a routerLink="/{{ gender_category }}"> Accueil</a>
    </li>
    <li>
      <a
      routerLink="/{{ gender_category }}/{{
        brand_category | HyphenateCase
      }}"
    >
      {{ brand_category }}</a
    >
    </li>
    <li>
      <a routerLink="/{{ gender_category }}/pret-a-porter">
        Prêt-à-porter</a
      >
    </li>
    <li>
      <a routerLink="/{{ gender_category }}
/pret-a-porter/{{ product_category }}"
    >
      {{ product_category }}</a
    >
    </li>
  </ul>
  </div>

  <div class="row">
  <div class="col-md-8">     
      <img class="image" src="{{ image_url }}" />
  </div>  
  <div class="col-md-4">    
    <mat-card class="card-container">
              <div class="mt-3 fw-bold">
                <h2>{{ brand_category }}</h2>
              </div>
              <div class="mt-3 fw-semibold">
                {{ product_name }}
              </div>
              <div class="mt-3 fw-light">
                {{ unit_price | currency: 'EUR'}}
              </div>
              <div class="mt-3 fw-light" *ngIf="units_in_stock != 0">
                En Stock
              </div>
              <div class="mt-3 fw-light" *ngIf="units_in_stock == 0">
                En Rupture de stock
              </div>
                <button
                *ngIf="product"
                mat-raised-button
                [ngStyle]="{'background-color': backgroundColor, 'color':fontColor}"
                class="cart-button mt-4"
                  (click)="add.emit(product)"                  
                >
                  Ajouter au panier
                </button>
                <div class="item-info">
                  <ul>
                    <li>Paiement en 3 fois sans frais.</li>
                  </ul>
                  <ul>
                    <li>Livraison offert dès 200€ d'achat.</li>
                  </ul>
                  <ul>
                    <li>Retours offerts et enlevés à domicile.</li>
                  </ul>
                </div>
              
        </mat-card>
        </div>
      </div>
  </div>`,      
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  backgroundColor: string = "#000";
  fontColor: string = "#f1f1f1";

  @Input() product!: Product | null;
  @Output() add = new EventEmitter<Product>();

  get gender_category() {
    if (this.product != null) return this.product.gender_category;
    return;
  }

  get brand_category() {
    if (this.product != null) return this.product.brand_category;
    return;
  }

  get product_category() {
    if (this.product != null) return this.product.product_category;
    return;
  }

  get image_url() {
    if (this.product != null) return this.product.image_url;
    return;
  }

  get product_name() {
    if (this.product != null) return this.product.product_name;
    return;
  }

  get unit_price() {
    if (this.product != null) return this.product.unit_price;
    return;
  }

  get units_in_stock() {
    if (this.product != null) return this.product.units_in_stock;
    return;
  }
}
