import {
  Component, OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApparelCategory } from '../../models/ApparelCategory';
import { Brand } from '../../models/Brand';
import { Gender } from '../../models/Gender';
 
import { apparelCategoriesActions, brandsActions } from '../../store/actions';
import { apparelCategoriesSelectors, brandsSelectors, genderSelectors, imageSelectors, videoSelectors } from '../../store/selectors';


@Component({
  selector: 'app-navbar-page',
  template: `
    <app-navbar    
      [video_url]="video$ | async"
      [image_url]="image$ | async"
      [brands]="brands$ | async"
      [apparelCategories]="apparelCategories$ | async"
      (selectBrand)="setBrand($event)"
      (selectApparelCategory)="setApparelCategory($event)"
    ></app-navbar>
  `,
})
export class NavbarPageComponent implements OnInit{
  video$: Observable<string | null>;
  image$: Observable<string | null>;
  brands$: Observable<Brand[]>;
  apparelCategories$: Observable<ApparelCategory[]>;

  genderSubscription!: Subscription;
  gender$: Observable<Gender | null>;

  constructor(private store: Store<Store>) {    
    this.video$ = this.store.select(videoSelectors.selectVideo);
    this.image$ = this.store.select(imageSelectors.selectImage);
    this.brands$ = this.store.select(brandsSelectors.selectBrands);
    this.apparelCategories$ = this.store.select(apparelCategoriesSelectors.selectApparelCategories);
    this.gender$ = this.store.select(genderSelectors.selectGender);
    this.genderSubscription = new Subscription;
  }

  ngOnInit(): void {
    this.genderSubscription = this.gender$.subscribe(() => {
      this.dispatchGenderData()}
    );
  }

  dispatchGenderData() {       
    this.store.dispatch(brandsActions.loadBrands());
    this.store.dispatch(apparelCategoriesActions.loadApparelCategories());
  }

  setBrand(brand: Brand) {
    this.store.dispatch(brandsActions.setBrand({brand}));
  }

  setApparelCategory(apparelCategory: ApparelCategory) {
    this.store.dispatch(apparelCategoriesActions.setApparelCategory({apparelCategory}));
  }

  ngOnDestroy(): void {
    this.genderSubscription.unsubscribe();
  }
}
