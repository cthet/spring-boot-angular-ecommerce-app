import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApparelCategory } from '../../../models/ApparelCategory';
import { imageActions, productsActions } from '../../../store/actions';
import { apparelCategoriesSelectors } from '../../../store/selectors';
import { brandCategoriesActions } from '../store/actions';

@Component({
  selector: 'app-apparel-category-page',
  template: `    
  <app-navbar-page></app-navbar-page>
  <app-apparel-category-product-page></app-apparel-category-product-page>
  `,
})
export class ApparelCategoryPageComponent implements OnDestroy{
  apparelCategorySubscription!: Subscription;
  apparelCategory$!: Observable<ApparelCategory | null>;

  constructor(private store: Store<Store>) {
    this.apparelCategory$ = this.store.select(apparelCategoriesSelectors.selectApparelCategory);
  }

  ngOnInit(): void {
    this.dispatchApparelCategoryData();
  }

  dispatchApparelCategoryData(){
    this.apparelCategorySubscription = this.apparelCategory$.subscribe(() => {
      this.store.dispatch(imageActions.setApparelCategoryImage());
      this.store.dispatch(brandCategoriesActions.loadBrandCategoriesByApparelCategory());
      this.store.dispatch(productsActions.loadProductsByApparelCategory());
    })
  }

  ngOnDestroy() {
    this.apparelCategorySubscription.unsubscribe();
  }


}
