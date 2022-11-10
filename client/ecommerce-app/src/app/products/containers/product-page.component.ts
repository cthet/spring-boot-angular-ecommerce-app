import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Update } from '@ngrx/entity';
import { CartItem } from 'src/app/cart/models/cart-Item';
import { Product } from 'src/app/products/models/product';

import { BrandActions } from '../actions';
import { NavbarActions } from 'src/app/shared/actions';
import { CartActions } from '../../core/actions';

import * as fromProducts from '../reducers';
import * as fromCart from '../../reducers/index';
@Component({
  selector: 'app-product-page',
  template: `
    <app-product [product]="product$ | async" (add)="addToCart($event)">
    </app-product
    >>
  `,
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Product>;
  isProductInCart$: Observable<boolean>;

  constructor(private store: Store<Store>) {
    this.product$ = this.store.select(
      fromProducts.selectProduct
    ) as Observable<Product>;
    this.isProductInCart$ = this.store.select(fromCart.cartItemExists);
  }

  ngOnInit(): void {
    this.store.dispatch(BrandActions.removeBrand());
    this.store.dispatch(NavbarActions.removeVideo());
  }

  addToCart(product: Product) {
    this.isProductInCart$.pipe(take(1)).subscribe((isProductInCart) => {
      if (!isProductInCart) {
        const cartItem = {
          item: product,
          quantity: 1,
        };
        this.store.dispatch(CartActions.addCartItem({ cartItem: cartItem }));
      } else {
        this.store
          .pipe(select(fromCart.selectCartItemEntityById))
          .pipe(take(1))
          .subscribe((cartItem) => {
            const itemUpdated: Update<CartItem> = {
              id: cartItem?.item.id!,
              changes: {
                item: cartItem?.item,
                quantity: cartItem?.quantity! + 1,
              },
            };
            this.store.dispatch(
              CartActions.updateCartItem({ update: itemUpdated })
            );
          });
      }
    });
  }
}
