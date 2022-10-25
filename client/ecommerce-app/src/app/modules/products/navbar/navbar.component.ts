import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
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

import { loadApparelCategoriesByBrandId } from '../products-category/store/product-category.action';

import {
  loadProductsByBrandIdAndCategoryId,  
} from '../products-list/store/product-list.action';

import { loadBrandByBrandId , RemoveBrand } from '../brand/store/brand.actions';
import { selectBrand } from '../brand/store/brand.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  video$ = this.store.select(selectHomeVideo);
  brand$ = this.store.select(selectBrand);
  brands$ = this.store.select(selectAllBrand);
  apparelCategories$ = this.store.select(selectAllApparelCategories);

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dispatchOnInit();
    this.dispatchOnRouterEvent();
  }

  dispatchOnInit(){
    this.store.dispatch(loadBrandsByGenderId());
    this.store.dispatch(loadApparelCategoriesBygenderId());
    this.store.dispatch(setVideo());
    this.store.dispatch(RemoveBrand());
  }

  dispatchOnRouterEvent(){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(loadBrandsByGenderId());
        this.store.dispatch(loadApparelCategoriesBygenderId());
        this.store.dispatch(setVideo());
        this.store.dispatch(RemoveBrand());
      }
    });
  }

  fetchBrandDatas(brandId: number) {
    this.store.dispatch(
      loadBrandByBrandId({
        brandId: brandId,
      })
    );
    this.store.dispatch(
      loadApparelCategoriesByBrandId({
        brandId: brandId,
      })
    );
    this.store.dispatch(
      loadProductsByBrandIdAndCategoryId({
        categoryId: 0,
        brandId: brandId,
      })
    );
  }
}
