import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/User';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import * as CoreActions from '../actions/index';
import * as fromHeader from '../../reducers';
import * as fromAuthActions from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers/index'

@Component({
  selector: 'app-root',
  template: `
    <app-header 
    [user]="user$ | async"
    [totalQuantity]="totalQuantity$ | async"
    (gender)="setGender($event)"
    (logout)="logout()"></app-header>

    <router-outlet> </router-outlet>

    <app-footer></app-footer>
  `,
})
export class CoreComponent {
  user$!: Observable<User |null>;
  totalQuantity$!: Observable<number>;

  title = 'ecommerce-app';
  isConnected = false;

  constructor(
    private store: Store<Store>,
    private tokenStorageService: TokenStorageService
  ) {
    this.user$ = this.store.select(fromAuth.selectUser);
    this.totalQuantity$ = this.store.select(fromHeader.selectCartItemsQuantity);
  }

  ngOnInit(): void {
    this.browserReload();
    //this.getCartStatus();
  }

  logout() {
    //  this.authService.logout();
  }

  getCartStatus() {
    // this.cartService.totalQuantity$.subscribe((data: number) => {
    //   this.totalQuantity = data;
    // });
  }

  browserReload() {
    const user: User | null = this.tokenStorageService.getUser();
    if (user != null) {
      this.store.dispatch(fromAuthActions.browserReload({ user: user }));
    }
    //  const token = this.tokenstorage.getToken();
    // if (token) {
    //   this.authService.isConnected.next(true);
    // } else {
    //   this.authService.isConnected.next(false);
    // }
    // this.authService.isConnected.subscribe((subscriber) => {
    //   this.isLoggedIn = subscriber;
    // });
  }

  setGender(gender: string) {
    if (gender === 'M') {
      this.store.dispatch(
        CoreActions.HeaderActions.setGender({
          gender: { id: 1, type: 'homme' },
        })
      );
    } else {
      this.store.dispatch(
        CoreActions.HeaderActions.setGender({
          gender: { id: 2, type: 'femme' },
        })
      );
    }
  }
}
