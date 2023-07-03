import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products-list',
  template: `
    <div class="main">
      <div *ngFor="let product of productsC | paginate :{itemsPerPage: size!, currentPage: currentPage!,  totalItems: totalItems!}, let i=index">
        <mat-card
          *ngIf="product.active"
          class="custom"
          (click)="setProduct.emit(product)"
          routerLink="/{{ product.gender_category }}/{{
            product.brand_category | HyphenateCase
          }}/{{ product.product_category | HyphenateCase }}/{{
            product.product_name | HyphenateCase
          }}/{{product.id}}"
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
            <span>{{ product.product_name }}</span>
            <p class="price">
              {{ product.unit_price | currency: 'EUR' }}
            </p>
          </mat-card-content>
        </mat-card>

        </div>
       
            <pagination-controls      
              previousLabel="Precedent"
              nextLabel="Suivant"
              (pageChange)="PageChange.emit($event)">
            </pagination-controls>
            </div>
  `,
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products!: Product[] | null;

  @Output() setProduct = new EventEmitter<Product>();
  @Output() PageChange = new EventEmitter<number>();

  @Input() currentPage!:number | null;
  @Input() totalItems!:number | null;
  @Input() size!:number | null;

  get productsC() {
    if(this.products!=null){
    let collection = [];
    for(let i=0; i<this.products.length; i++){
    collection?.push(this.products![i]);
    }
    return collection;
    }
    else return [];
  }
}


