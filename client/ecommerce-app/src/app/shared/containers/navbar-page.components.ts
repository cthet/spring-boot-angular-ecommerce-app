import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { Brand } from 'src/app/products/models/brand';
import { Gender } from 'src/app/core/models/gender';

import {
  BrandActions,
  ProductCategoryActions,
  ProductsListActions,
} from '../../products/actions';
import { NavbarActions } from '../actions';

import * as fromNavbar from '../reducers';
import * as fromHeader from '../../reducers/index';
import * as fromProducts from '../../products/reducers/index';

@Component({
  selector: 'app-navbar-page',
  template: `
    <app-navbar
      [gender]="gender$ | async"
      [video_url]="video$ | async"
      [image_url]="image$ | async"
      [brands]="brands$ | async"
      [apparelCategories]="apparelCategories$ | async"
      (select)="loadBrandDatas($event)"
    ></app-navbar>
  `,
})
export class NavbarPageComponent implements OnInit, OnDestroy {
  genderSubscription!: Subscription;

  gender$: Observable<Gender>;
  video$: Observable<string>;
  image$: Observable<string>;
  brands$: Observable<Brand[]>;
  apparelCategories$: Observable<ApparelCategory[]>;
  brand$: Observable<Brand>;

  @Output() brandId = new EventEmitter<number>();

  constructor(private store: Store<Store>) {
    this.gender$ = this.store.select(fromHeader.selectGender);
    this.video$ = this.store.select(fromNavbar.selectVideo);
    this.image$ = this.store.select(fromNavbar.selectImage);
    this.brands$ = this.store.select(fromNavbar.selectAllBrand);
    this.apparelCategories$ = this.store.select(
      fromNavbar.selectAllApparelCategories
    );
    this.brand$ = this.store.select(fromProducts.selectBrand);
  }

  ngOnInit(): void {
    this.genderSubscription = this.gender$.subscribe(() =>
      this.dispatchGenderData()
    );
  }

  dispatchGenderData() {
    this.store.dispatch(NavbarActions.loadBrandsByGenderId());
    this.store.dispatch(NavbarActions.loadApparelCategoriesBygenderId());
    this.store.dispatch(NavbarActions.setVideo());
    this.store.dispatch(BrandActions.removeBrand());
  }

  loadBrandDatas(brandId: number) {
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

  ngOnDestroy(): void {
    this.genderSubscription.unsubscribe();
  }
}
