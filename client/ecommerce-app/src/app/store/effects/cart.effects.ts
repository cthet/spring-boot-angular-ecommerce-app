import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Cart } from '../../models/Cart';
import { CartService } from '../../modules/services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { cartActions } from '../actions';
import { cartSelectors } from '../selectors';


@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private store: Store,
    private localstorageService: LocalStorageService
  ) {}

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadCart),
      mergeMap((action) =>        
        this.cartService.fetchCart()
          .pipe(
            map((cart: Cart) => 
            cartActions.loadCartSuccess({cart}),          
            ),           
            catchError((error) =>
              of(cartActions.loadCartFailure({ error: error.message }))        
            )
          ),          
      )     
    ),
  );

  saveCart$ = createEffect(() =>
  this.actions$.pipe(
    ofType(cartActions.saveCart),
    concatLatestFrom((action) => this.store.select(cartSelectors.selectCart)),
    mergeMap(([action, cart]) =>
      this.cartService.saveCart(cart)
      .pipe(
        switchMap(() => ([
          cartActions.saveCartSuccess(),          
          cartActions.clearAllCartItems()
        ])        
        ),           
        catchError((error) =>
          of(cartActions.saveCartFailure({ error: error.message }))        
        )
      ),          
  )     
  ))

  saveCartToLocalStorage$ = createEffect(() =>
  this.actions$.pipe(
    ofType(cartActions.loadCartSuccess,cartActions.addCartItem, cartActions.deleteCartItem, cartActions.updateCartItem),    
    concatLatestFrom((action) => [
      this.store.select(cartSelectors.selectAllCartItems),
      this.store.select(cartSelectors.selectCartItemsTotalPrice),
      this.store.select(cartSelectors.selectCartItemsTotalQuantity)
    ]),
    tap(([action, cartItems, totalPrice, totalQuantity]) => 
    this.localstorageService.saveCart(new Cart(cartItems, totalPrice, totalQuantity))
    )
  ),
  {dispatch: false}
  )


}