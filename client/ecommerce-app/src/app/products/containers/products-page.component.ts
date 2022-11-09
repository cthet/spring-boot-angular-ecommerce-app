import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarActions } from 'src/app/shared/actions';
import {
  BrandActions,
  ProductCategoryActions,
  ProductsListActions,
} from '../actions';
import { ProductsState } from '../reducers';

@Component({
  selector: 'app-products',
  template: `
    <app-navbar-page (brandId)="loadDatasFromBrand($event)"></app-navbar-page>
    <router-outlet></router-outlet>
  `,
})
export class ProductsPageComponent implements OnInit {
  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.store.dispatch(NavbarActions.setVideo());
  }

  loadDatasFromBrand(brandId: number) {
    this.store.dispatch(
      BrandActions.loadBrandByBrandId({
        brandId: brandId,
      })
    );
    this.store.dispatch(
      ProductCategoryActions.loadApparelCategoriesByBrandId({
        brandId: brandId,
      })
    );
    this.store.dispatch(
      ProductsListActions.loadProductsByBrandId({
        brandId: brandId,
      })
    );
  }
}
