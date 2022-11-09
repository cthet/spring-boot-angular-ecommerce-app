import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { HeaderActions } from '../actions';

@Component({
  selector: 'app-header',
  template: `
    <nav class="header-container">
      <div class="navbar-container">
        <!--gender-->
        <div class="gender-links">
          <a
            routerLink="/homme"
            routerLinkActive="active"
            class="men"
            (click)="setGender('M')"
            >homme</a
          >
          <i class="fas fa-grip-lines-vertical"></i>
          <a
            routerLink="/femme"
            routerLinkActive="active"
            class="women"
            (click)="setGender('F')"
            >femme</a
          >
        </div>

        <!--E-commerce Brand-->
        <a routerLink="/" class="brand">Shop</a>

        <div class="right-links">
          <!--authentication-->
          <a
            *ngIf="!isLoggedIn"
            routerLink="/connexion"
            routerLinkActive="active"
            class="fa fa-user auth"
          >
          </a>

          <!--logout-->
          <a
            *ngIf="isLoggedIn"
            class="nav-item"
            routerLink="/home"
            (click)="logout()"
          >
            Logout
          </a>

          <!--profile-->
          <a
            *ngIf="isLoggedIn"
            routerLink="/profile"
            routerLinkActive="active"
            class="fa fa-user"
          >
          </a>

          <!--Cart-->
          <a
            routerLink="/cart"
            routerLinkActive="active"
            class="fa fa-shopping-bag cart"
          >
            <span class="text-quantity">{{ totalQuantity }} </span>
          </a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  totalQuantity!: number;

  constructor(
    private tokenstorage: TokenStorageService,
    private authService: AuthService,
    private store: Store<Store>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.checkLoggedIn();
    this.getCartStatus();
  }

  logout() {
    this.authService.logout();
  }

  getCartStatus() {
    this.cartService.totalQuantity$.subscribe((data: number) => {
      this.totalQuantity = data;
    });
  }

  checkLoggedIn() {
    const token = this.tokenstorage.getToken();
    if (token) {
      this.authService.isConnected.next(true);
    } else {
      this.authService.isConnected.next(false);
    }

    this.authService.isConnected.subscribe((subscriber) => {
      this.isLoggedIn = subscriber;
    });
  }

  setGender(gender: string) {
    if (gender === 'M') {
      this.store.dispatch(
        HeaderActions.setGender({ gender: { id: 1, type: 'homme' } })
      );
    } else {
      this.store.dispatch(HeaderActions.setGender({ gender: { id: 2, type: 'femme' } }));
    }
  }
}
