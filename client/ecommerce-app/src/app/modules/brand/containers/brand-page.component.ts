import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Brand } from '../../../models/Brand';
import { imageActions, productsActions } from '../../../store/actions';
import { brandsSelectors } from '../../../store/selectors';
import { apparelCategoriesBrandActions } from '../store/actions';
@Component({
  selector: 'app-brand-page',
  template: `
    <app-navbar-page></app-navbar-page>
    <app-brand-products-page></app-brand-products-page>
`, 
})
export class BrandPageComponent implements OnInit, OnDestroy  { 
  brandSubscription!: Subscription;
  brand$!: Observable<Brand | null>;

  constructor(private store: Store<Store>) {
    this.brand$ = this.store.select(brandsSelectors.selectBrand);
  }

  ngOnInit(): void {
    this.dispatchBrandData();
  }

  dispatchBrandData(){
    this.brandSubscription = this.brand$.subscribe(() => {
      this.store.dispatch(imageActions.setBrandImage());
      this.store.dispatch(apparelCategoriesBrandActions.loadApparelCategoriesByBrand());
      this.store.dispatch(productsActions.loadProductsByBrand());
    })
  }

  ngOnDestroy() {
    this.brandSubscription.unsubscribe();
  }


}