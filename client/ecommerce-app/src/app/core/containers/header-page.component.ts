import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Gender } from '../../models/Gender';
import { authActions, genderActions } from '../../store/actions';
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
    this.store.dispatch(authActions.clearUser());       
  }

}
