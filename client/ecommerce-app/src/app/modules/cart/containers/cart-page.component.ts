import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { Cart } from '../../../models/Cart';
import { imageActions, videoActions } from '../../../store/actions';
import { cartSelectors } from '../../../store/selectors';

@Component({
  selector: 'app-cart',
  template: `
  <app-navbar-page></app-navbar-page>
  <router-outlet></router-outlet>
  `,
})
export class CartPageComponent implements OnInit, OnDestroy {
  cart$!: Observable<Cart | null>;
  cartSub: Subscription = new Subscription;
  routerSub: Subscription = new Subscription;

  constructor(private store: Store<Store>, private router: Router) {
    this.cart$ = this.store.select(cartSelectors.selectCart);
  }

  ngOnInit(): void {
    this.store.dispatch(imageActions.removeImage());
    this.store.dispatch(videoActions.removeVideo());

    this.cartSub = this.cart$.subscribe(cart =>  {
        if(cart?.cartItems.length === 0){
          this.router.navigate(['panier/vide'])
          } else {
          this.router.navigate(['panier/details'])
        }
      }
    )  

    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/panier'){
      this.cart$.pipe(take(1)).subscribe(cart =>  {
      if(cart?.cartItems.length === 0){
        this.router.navigate(['panier/vide'])
    } else {
      this.router.navigate(['panier/details'])
    }
    })
      }
    })
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
    this.routerSub.unsubscribe();
  }
}
