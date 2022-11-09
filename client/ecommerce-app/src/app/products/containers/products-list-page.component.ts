import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/products/models/brand';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { MatRadioChange } from '@angular/material/radio';
import * as fromProducts from '../reducers';
import {
  ProductAction,
  ProductCategoryActions,
  ProductsListActions,
} from '../actions';

@Component({
  selector: 'app-products-list-page',
  template: `
    <app-brand [brand]="brand$ | async"></app-brand>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <app-products-category
            [apparelCategories]="apparelCategories$ | async"
            (sort)="sortProducts($event)"
            (filter)="filterApparelsCategory($event)"
          ></app-products-category>
        </div>
        <div class="col-sm-9 pt-4 pb-4">
          <app-products-list
            [products]="products$ | async"
            (set)="setProduct($event)"
          >
          </app-products-list>
        </div>
      </div>
    </div>
  `,
})
export class ProductsListPageComponent implements OnInit {
  brand$: Observable<Brand>;
  products$: Observable<Product[]>;
  apparelCategories$: Observable<ApparelCategory[]>;

  constructor(private store: Store<Store>) {
    this.brand$ = this.store.select(fromProducts.selectBrand);
    this.products$ = this.store.select(fromProducts.selectProducts);
    this.apparelCategories$ = this.store.select(
      fromProducts.selectApparelCategories
    );
  }

  ngOnInit(): void {}

  filterApparelsCategory(param: { checked: boolean; categoryId: number }) {
    if (param.checked) {
      this.store.dispatch(
        ProductCategoryActions.checkApparelCategory({
          apparelCategoryId: param.categoryId,
        })
      );
    } else {
      this.store.dispatch(
        ProductCategoryActions.uncheckApparelCategory({
          apparelCategoryId: param.categoryId,
        })
      );
    }
    this.store.dispatch(ProductsListActions.loadProducts());
  }

  sortProducts(event: MatRadioChange) {
    this.store.dispatch(
      ProductsListActions.loadSortedProducts({ sort: event.value })
    );
  }

  setProduct(product: Product) {
    this.store.dispatch(ProductAction.setProduct({ product: product }));
  }
}
