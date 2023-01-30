import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Update } from '@ngrx/entity';

import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';

import { cartActions, imageActions, productActions, videoActions } from '../../store/actions';
import { cartSelectors, productSelectors,  } from '../../store/selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  template: `
  <app-navbar-page></app-navbar-page>
    <app-product [product]="product$ | async" (add)="addToCart($event)">
    </app-product
    >
  `,
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Product | null>;
  isProductInCart$: Observable<boolean>;

  constructor(private store: Store<Store>, private route: ActivatedRoute) {
    this.product$ = this.store.select(productSelectors.selectProduct)
    this.isProductInCart$ = this.store.select(cartSelectors.cartItemExists);
  }

  ngOnInit(): void {
    this.store.dispatch(imageActions.removeImage());
    this.store.dispatch(videoActions.removeVideo());
    this.dispatchProduct();
  }

  dispatchProduct(){
    let id = this.route.snapshot.paramMap.get('id'); 
    if(id!=null){
      this.store.dispatch(productActions.loadProduct({
        productId: +id }));
    }   
  }

  addToCart(product: Product) {
    this.isProductInCart$.pipe(take(1)).subscribe((isProductInCart) => {
      if (!isProductInCart) {
        const cartItem = {
          product: product,
          quantity: 1,
          amount: product.unit_price
        };
        this.store.dispatch(cartActions.addCartItem({ cartItem }));
      } else {
        this.store
          .pipe(select(cartSelectors.selectCartItemEntityById))
          .pipe(take(1))
          .subscribe((cartItem) => {
            const cartItemUpdated: Update<CartItem> = {
              id: cartItem?.product.id!,
              changes: {
                product: cartItem!.product,
                quantity: cartItem!.quantity + 1,
                amount: cartItem!.amount + cartItem!.product.unit_price
              },
            };
            this.store.dispatch(
              cartActions.updateCartItem({ update: cartItemUpdated })
            );
          });
      }
    });
  }
}
