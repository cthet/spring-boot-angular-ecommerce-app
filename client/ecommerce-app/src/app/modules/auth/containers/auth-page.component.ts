import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { imageActions } from '../../../store/actions';

@Component({
  selector: 'app-auth',
  template: `
    <app-navbar-page></app-navbar-page>
    <router-outlet></router-outlet>
  `,
})
export class AuthPageComponent implements OnInit {
  constructor(private store: Store<Store>) {}


  ngOnInit(): void {
    this.store.dispatch(imageActions.setLoginImage());
  }

}
