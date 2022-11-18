import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarActions } from 'src/app/shared/actions';
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
    this.store.dispatch(
      NavbarActions.setImageSuccess({
        image: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/auth-page/identification-header_retina.jpg`,
      })
    );
    
  }
}
