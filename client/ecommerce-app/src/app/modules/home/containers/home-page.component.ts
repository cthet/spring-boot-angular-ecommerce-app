import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Gender } from '../../../models/gender';
import { imageActions, videoActions } from '../../../store/actions';
import { genderSelectors } from '../../../store/selectors';

import {setHomeImages} from '../store/actions/images.actions';
import { imagesSelectors } from '../store/selectors';


@Component({
  selector: 'app-homegender',
  template: `
    <app-navbar-page></app-navbar-page>
    <app-home-details
      [headerImage]="headerImage$ | async"
      [footerImage]="footerImage$ | async"
    >
    </app-home-details>
  `,
})
export class HomePageComponent implements OnInit, OnDestroy {
  genderSubscription!: Subscription;
  gender$: Observable<Gender | null>;
  
  headerImage$: Observable<string | null>;
  footerImage$: Observable<string | null>;

  constructor(
    private store: Store<Store>
  ) {
    this.gender$ = this.store.select(genderSelectors.selectGender);
    this.headerImage$ = this.store.select(imagesSelectors.selectheaderHomeImage);
    this.footerImage$ = this.store.select(imagesSelectors.selectfooterHomeImage);
  }

  ngOnInit(): void {    
    this.genderSubscription = this.gender$.subscribe(() => {
      this.dispatchGenderData()
      });
  }

  dispatchGenderData(){
    this.store.dispatch(videoActions.setHomeVideo());
    this.store.dispatch(imageActions.removeImage());
    this.store.dispatch(setHomeImages());  
  }

  ngOnDestroy(): void {
    this.genderSubscription.unsubscribe()
  }
}
