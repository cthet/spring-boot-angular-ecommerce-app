import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApparelCategory } from '../../../models/apparelCategory';
import { Brand } from '../../../models/brand';
import { Product } from '../../../models/product';
import { productsActions } from '../../../store/actions';
import { brandsSelectors, productsSelectors } from '../../../store/selectors';
import { apparelCategoriesBrandActions } from '../store/actions';
import { apparelCategoriesBrandSelectors } from '../store/selectors';


@Component({
  selector: 'app-brand-products-page',
  template: `
    <app-brand [brand]="brand$ | async"></app-brand>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
        <app-products-category
            [apparelCategories]="apparelCategories$ | async"            
            (filter)="filterApparelsCategory($event)"
          ></app-products-category>
          <app-sort-products (sort)="sortProducts($event)"
          ></app-sort-products>  
        </div>
        <div class="col-sm-9 pt-4 pb-4">
        <app-products-list
            [products]="products$ | async"
          >
          </app-products-list>
        </div>
      </div>
    </div>
  `,
})
export class BrandProductsPageComponent implements OnInit{
  brand$: Observable<Brand | null>;
  apparelCategories$: Observable<ApparelCategory[]>;
  products$: Observable<Product[]>;

  constructor(private store: Store<Store>, private router: Router) {
    this.brand$ = this.store.select(brandsSelectors.selectBrand);
    this.apparelCategories$ = this.store.select(apparelCategoriesBrandSelectors.selectApparelCategories);
    this.products$ = this.store.select(productsSelectors.selectProducts);    
  }

  ngOnInit(): void {}

  filterApparelsCategory(param: { checked: boolean; categoryId: number }) {
    if (param.checked) {
      this.store.dispatch(
        apparelCategoriesBrandActions.checkApparelCategory({
          apparelCategoryId: param.categoryId,
        })
      );
    } else {
      this.store.dispatch(
        apparelCategoriesBrandActions.uncheckApparelCategory({
          apparelCategoryId: param.categoryId,
        })
      );
    }
    this.store.dispatch(productsActions.loadFilteredProducts());
  }

  sortProducts(event: MatRadioChange) {
    this.store.dispatch(
      productsActions.setSort({ sort: event.value })
    );
    this.store.dispatch(productsActions.loadFilteredProducts());
  }

}
