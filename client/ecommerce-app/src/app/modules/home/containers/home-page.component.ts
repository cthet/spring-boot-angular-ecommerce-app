import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { Gender } from '../../../models/Gender';
import { imageActions, videoActions } from '../../../store/actions';
import { genderSelectors } from '../../../store/selectors';
import { newProductsActions, imagesActions } from '../store/actions';

import { imagesSelectors, newProductsSelectors } from '../store/selectors';

@Component({
  selector: 'app-homegender',
  template: `
    <app-navbar-page></app-navbar-page>
    <app-home-details
      [headerImage]="headerImage$ | async"
      [footerImage]="footerImage$ | async"
      [newProducts]="newProducts$ | async"
    >
    </app-home-details>
  `,
})
export class HomePageComponent implements OnInit {
  genderSubscription!: Subscription;
  gender$: Observable<Gender | null>;
  
  headerImage$: Observable<string | null>;
  footerImage$: Observable<string | null>;
  newProducts$: Observable<Product[]>;

  constructor(
    private store: Store<Store>
  ) {
    this.gender$ = this.store.select(genderSelectors.selectGender);
    this.headerImage$ = this.store.select(imagesSelectors.selectheaderHomeImage);
    this.footerImage$ = this.store.select(imagesSelectors.selectfooterHomeImage);
    this.newProducts$ = this.store.select(newProductsSelectors.selectNewProducts)
  }

  ngOnInit(): void {    
    this.genderSubscription = this.gender$.subscribe(() => {
      this.dispatchGenderData()
      });
  }

  dispatchGenderData(){
    this.store.dispatch(videoActions.setHomeVideo());
    this.store.dispatch(imageActions.removeImage());
    this.store.dispatch(imagesActions.setHomeImages());  
    this.store.dispatch(newProductsActions.loadNewProducts());
  }

  ngOnDestroy(): void {
    this.genderSubscription.unsubscribe()
  }

}
