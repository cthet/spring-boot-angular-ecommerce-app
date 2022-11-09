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
import * as fromNavbar from '../reducers';
import { NavbarActions } from '../actions';
import { BrandActions } from 'src/app/products/actions';

@Component({
  selector: 'app-navbar-page',
  template: `
    <app-navbar
      [video]="video$ | async"
      [brand]="brand$ | async"
      [brands]="brands$ | async"
      [apparelCategories]="apparelCategories$ | async"
      (select)="onSelectBrand($event)"
    ></app-navbar>
  `,
})
export class NavbarPageComponent implements OnInit, OnDestroy {
  genderSubscription!: Subscription;

  gender$: Observable<Gender>;
  video$: Observable<string>;
  brand$: Observable<Brand>;
  brands$: Observable<Brand[]>;
  apparelCategories$: Observable<ApparelCategory[]>;

  @Output() brandId = new EventEmitter<number>();

  constructor(private store: Store<Store>) {
    this.gender$ = this.store.select(fromNavbar.selectGender);
    this.video$ = this.store.select(fromNavbar.selectHomeVideo);
    this.brand$ = this.store.select(fromNavbar.selectBrand);
    this.brands$ = this.store.select(fromNavbar.selectAllBrand);
    this.apparelCategories$ = this.store.select(
      fromNavbar.selectAllApparelCategories
    );
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

  onSelectBrand(brandId: number) {
    this.brandId.emit(brandId);
  }

  ngOnDestroy(): void {
    this.genderSubscription.unsubscribe();
  }
}
