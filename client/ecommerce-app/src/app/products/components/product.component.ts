import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="product-container">
      <hr />
      <div class="container pt-4">
        <div *ngIf="product" class="col-sm-12">
          <div class="row">
            <div class="col-sm-12 pb-4">
              <a routerLink="/{{ gender_category }}"> Accueil</a>>
              <a
                routerLink="/{{ gender_category }}/marques/{{
                  brand_category | HyphenateCase
                }}"
              >
                {{ brand_category }}</a
              >>
              <a routerLink="/{{ gender_category }}/pret-a-porter">
                Prêt-à-porter</a
              >>
              <a
                routerLink="/
            {{ gender_category }}
          /pret-a-porter/{{ product_category }}"
              >
                {{ product_category }}</a
              >>
            </div>
          </div>
          <div class="row">
            <div class="main col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <img class="image" src="{{ image_url }}" />
                </div>
                <div class="col-sm-6">
                  <div class="mt-3 fw-bold fs-4">
                    {{ brand_category }}
                  </div>
                  <div class="mt-3 fw-semibold fs-5">
                    {{ product_name }}
                  </div>
                  <div class="mt-3 fw-light fs-6">
                    {{ unit_price | currency: 'EUR' }}
                  </div>
                  <div class="mt-3 fw-light fs-6" *ngIf="units_in_stock != 0">
                    En Stock
                  </div>
                  <div class="mt-3 fw-light fs-6" *ngIf="units_in_stock == 0">
                    En Rupture de stock
                  </div>
                  <div>
                    <button
                      mat-raised-button
                      (click)="add.emit(product)"
                      class="cart-button mt-4"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
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
