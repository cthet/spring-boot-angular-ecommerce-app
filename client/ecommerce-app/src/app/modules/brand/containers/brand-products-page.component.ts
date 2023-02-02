import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApparelCategory } from '../../../models/ApparelCategory';
import { Brand } from '../../../models/Brand';
import { Product } from '../../../models/Product';
import { productsActions } from '../../../store/actions';
import { brandsSelectors, productsSelectors } from '../../../store/selectors';
import { apparelCategoriesBrandActions } from '../store/actions';
import { apparelCategoriesBrandSelectors } from '../store/selectors';


@Component({
  selector: 'app-brand-products-page',
  template: `
  <div class="brand-container">
    <app-brand [brand]="brand$ | async"></app-brand>
    <div class="container">
      <div class="row">
        <div class="col-md-3">

        <app-products-category            
            [apparelCategories]="apparelCategories$ | async"            
            (filter)="filterApparelsCategory($event)"          
          ></app-products-category>

          <app-sort-products (sort)="sortProducts($event)"
          ></app-sort-products>  

        </div>

        <div class="col-md-9 pt-4 pb-4">

        <app-products-list
            [currentPage]="currentPage$|async"
            [totalItems]="totalItems$ | async"
            [size]="size$ | async"
            [products]="products$ | async"
            (PageChange)="handlePageChange($event)"
          >
          </app-products-list>

        </div>
      </div>
    </div>
  </div>
  `,  styles: [`
.brand-container {
  display: block;
  height: 100%;
  padding-bottom: 50px;
}
  `]
})
export class BrandProductsPageComponent implements OnInit{
  brand$: Observable<Brand | null>;
  apparelCategories$: Observable<ApparelCategory[]>;
  products$: Observable<Product[]>;

  currentPage$: Observable<number>;
  totalItems$:  Observable<number>;
  size$: Observable<number>;
  sort: string = "id,asc";

  constructor(private store: Store<Store>, private router: Router) {
    this.brand$ = this.store.select(brandsSelectors.selectBrand);
    this.apparelCategories$ = this.store.select(apparelCategoriesBrandSelectors.selectApparelCategories);
    this.products$ = this.store.select(productsSelectors.selectProducts);    
    this.currentPage$ = this.store.select(productsSelectors.selectCurrentPage);
    this.totalItems$ = this.store.select(productsSelectors.selectTotalItems);
    this.size$ = this.store.select(productsSelectors.selectSize);
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
    this.store.dispatch(productsActions.setCurrentPage({currentPage: 1}));
    this.store.dispatch(productsActions.loadFilteredProductsFromBrand());
  }

  sortProducts(event: MatRadioChange) {
    this.store.dispatch(
      productsActions.setSort({ sort: event.value })
    );
    this.store.dispatch(productsActions.setCurrentPage({currentPage: 1}));
    this.store.dispatch(productsActions.loadFilteredProductsFromBrand());
  }


  handlePageChange(event: number){
    this.store.dispatch(productsActions.setCurrentPage({currentPage: event}));
    this.store.dispatch(productsActions.loadFilteredProductsFromBrand());  
  }

}
