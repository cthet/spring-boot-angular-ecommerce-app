import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarActions } from 'src/app/shared/actions';

import { ProductsState } from '../reducers';

@Component({
  selector: 'app-products',
  template: `
    <app-navbar-page></app-navbar-page>
    <router-outlet></router-outlet>
  `,
})
export class ProductsPageComponent implements OnInit {
  constructor(private store: Store<Store>) {}

  ngOnInit(): void {
    this.store.dispatch(NavbarActions.setVideo());
  }
}
