import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApparelCategory } from '../../../models/ApparelCategory';
import { Brand } from '../../../models/Brand';
import { Product } from '../../../models/Product';
import { apparelCategoriesActions, productsActions } from '../../../store/actions';
import { apparelCategoriesSelectors, brandsSelectors, productsSelectors } from '../../../store/selectors';
import { brandCategoriesActions } from '../store/actions';
import { brandsApparelCategoriesSelectors } from '../store/selectors';

@Component({
  selector: 'app-apparel-category-product-page',
  template: `
  <div class="apparel-category-container">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        
      <h3>Catégories</h3>

      <app-brands-category            
          [brands]="brands$ | async"            
          (filter)="filterBrands($event)"          
        ></app-brands-category>

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
`,  
styles: [`
.apparel-category-container {
display: block;
height: 100%;
padding-bottom: 50px;
padding: 20px;
}
`],
})
export class ApparelCategoryProductsPageComponent {
  brands$: Observable<Brand[]>;
  apparelCategories$: Observable<ApparelCategory[]>;

  products$: Observable<Product[]>;
  currentPage$: Observable<number>;
  totalItems$:  Observable<number>;
  size$: Observable<number>;
  sort: string = "id,asc";

  constructor(private store: Store<Store>) {
    this.brands$ = this.store.select(brandsApparelCategoriesSelectors.selectBrandCategories);
    this.apparelCategories$ = this.store.select(apparelCategoriesSelectors.selectApparelCategories);
    this.products$ = this.store.select(productsSelectors.selectProducts);    
    this.currentPage$ = this.store.select(productsSelectors.selectCurrentPage);
    this.totalItems$ = this.store.select(productsSelectors.selectTotalItems);
    this.size$ = this.store.select(productsSelectors.selectSize);
  }

  ngOnInit(): void {}

  filterBrands(param: { checked: boolean; brandId: number }) {
    if (param.checked) {
      this.store.dispatch(
        brandCategoriesActions.checkBrandCategory({
          brandCategoryId: param.brandId,
        })
      );
    } else {
      this.store.dispatch(
        brandCategoriesActions.uncheckBrandCategory({
          brandCategoryId: param.brandId,
        })
      );
    }
    this.store.dispatch(productsActions.setCurrentPage({currentPage: 1}));
    this.store.dispatch(productsActions.loadFilteredProductsFromApparelCategory());
  }

  filterApparelsCategory(event: MatRadioChange) {
    this.store.dispatch(apparelCategoriesActions.setApparelCategory({apparelCategory: event.value}));
    this.store.dispatch(productsActions.setCurrentPage({currentPage: 1}));
    this.store.dispatch(productsActions.loadFilteredProductsFromApparelCategory());
  }

  sortProducts(event: MatRadioChange) {
    this.store.dispatch(
      productsActions.setSort({ sort: event.value })
    );
    this.store.dispatch(productsActions.setCurrentPage({currentPage: 1}));
    this.store.dispatch(productsActions.loadFilteredProductsFromApparelCategory());
  }


  handlePageChange(event: number){
    this.store.dispatch(productsActions.setCurrentPage({currentPage: event}));
    this.store.dispatch(productsActions.loadFilteredProductsFromApparelCategory());  

  }
}
