import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Gender } from '../../models/gender';
import { CartService } from '../../modules/cart/services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { authActions, cartActions, genderActions } from '../../store/actions';
import { authSelectors, cartSelectors, genderSelectors } from '../../store/selectors';

@Component({
  selector: 'app-header-page',
  template: `
  <app-header
  [gender]="gender$ | async"
  [isLoggedIn]="isLoggedIn$ | async"
  [totalQuantity]="totalQuantity$ | async"
  (selectGender)="setGender($event)"
  (logout)="logout()"
></app-header>`,
})
export class HeaderPageComponent {
  gender$!: Observable<Gender |null>;
  isLoggedIn$!: Observable<Boolean | null>;
  totalQuantity$!: Observable<number>;
  
  constructor(
    private store: Store<Store>,
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    private router: Router
  ) {
    this.gender$ = this.store.select(genderSelectors.selectGender);
    this.isLoggedIn$ = this.store.select(authSelectors.selectLoggedIn);
    this.totalQuantity$ = this.store.select(cartSelectors.selectCartItemsTotalQuantity);
  }

  setGender(gender: string) {
    if (gender === 'men') {
      this.store.dispatch(
        genderActions.setGender({ gender: { id: 1, type: 'homme' } })
      );
    } else {
      this.store.dispatch(
        genderActions.setGender({
          gender: { id: 2, type: 'femme' },
        })
      );
    }
  }

  logout() {          
    this.store.select(cartSelectors.selectCart).pipe(
      take(1)).subscribe(cart => {
        console.log(cart);
      this.cartService.saveCart(cart.cartItems, cart.totalQuantity, cart.totalPrice).subscribe()
    });
    this.store.dispatch(authActions.clearUser());
    this.store.dispatch(cartActions.clearAllCartItems());
    this.localStorageService.logout();
    this.router.navigate(['']);
    
    //return this.http.post<any>('http://localhost:8080/logout', customerId);
  }

}
