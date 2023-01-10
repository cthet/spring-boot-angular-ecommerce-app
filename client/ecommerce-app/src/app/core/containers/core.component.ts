import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';
import { authActions, brandsActions, cartActions, genderActions } from '../../store/actions';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  template: `
    <app-header-page></app-header-page>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store<Store>,
    private localStorageService: LocalStorageService,
  ) {}


  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this.hydrateUser();
    this.hydrateCart();    
    this.hydrateGender();
    this.hydrateBrand();
  }

  hydrateUser(){
    const user = this.localStorageService.getUser();
    if (user != null) {
            this.store.dispatch(authActions.browserReload({ user }));
    }
  }

  hydrateCart(){
    const cart = this.localStorageService.getCart(); 
    if(cart!=null){
      this.store.dispatch(cartActions.browserReload({cart}));
    }
  }

    hydrateGender() {
      const gender = this.localStorageService.getGender();
      if (gender != null) {
         this.store.dispatch(genderActions.browserReload({ gender }));
        }
    }

    hydrateBrand() {
      const brand = this.localStorageService.getBrand();
        if (brand != null) {
        this.store.dispatch(brandsActions.browserReload({brand}));
      }    
    }

}






