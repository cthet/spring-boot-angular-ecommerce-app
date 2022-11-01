import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';

import {
  loadApparelCategoriesBygenderId,
  loadBrandsByGenderId,
  setVideo,
} from './store/navbar.actions';
import {
  selectAllApparelCategories,
  selectAllBrand,
  selectHomeVideo,
} from './store/navbar.selector';

import { RemoveBrand } from '../../products/brand/store/brand.actions';
import { selectBrand } from '../../products/brand/store/brand.selector';
import { selectGender } from 'src/app/components/header/store/header.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  gender$ = this.store.select(selectGender);
  video$ = this.store.select(selectHomeVideo);
  brand$ = this.store.select(selectBrand);
  brands$ = this.store.select(selectAllBrand);
  apparelCategories$ = this.store.select(selectAllApparelCategories);

  @Output() brand = new EventEmitter<number>();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.gender$.subscribe(() => this.dispatchGenderData());
  }

  dispatchGenderData() {
    this.store.dispatch(loadBrandsByGenderId());
    this.store.dispatch(loadApparelCategoriesBygenderId());   
    this.store.dispatch(RemoveBrand());
  }

  onSelectBrand(brandId: number) {
    this.brand.emit(brandId);
  }
}
