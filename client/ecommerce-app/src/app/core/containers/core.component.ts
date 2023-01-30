import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';
import { authActions, brandsActions, cartActions, genderActions } from '../../store/actions';

@Component({
  selector: 'app-root',
  template: `
    <app-header-page></app-header-page>
    <div class="wrap">
      <div id="main">
    <router-outlet></router-outlet>
    </div>
    </div>
    <app-footer></app-footer>
  `, styles: [`
.wrap {
  min-height: 100%;
}
#main {
  overflow: auto;
  width: 100%;
  padding-bottom: 300px;
  background-color: #f8f8f8;
}

  `]
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store<Store>,
    private localStorageService: LocalStorageService,
  ) {}


  ngOnInit(): void {
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






