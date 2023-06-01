import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap,map,mergeMap,of, switchMap, withLatestFrom } from 'rxjs';
import { CartService } from '../../modules/services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { authActions, cartActions } from '../actions';
import { cartSelectors } from '../selectors';
import { addressActions } from 'src/app/modules/checkout/store/actions';
import { liftInitialState } from '@ngrx/store-devtools/src/reducer';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private store: Store,
    private localstorageService: LocalStorageService
  ) {}
  clearUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(authActions.clearUser),
    concatLatestFrom((action) => this.store.select(cartSelectors.selectCart)),
    mergeMap(([action, cart]) =>
      this.cartService.saveCart(cart).pipe(       
        switchMap(() => ([
        cartActions.saveCart(),                        
        cartActions.clearAllCartItems(),               
        addressActions.clearAddresses(), 
        ])
      ),
  ))
  ))
}

  //)
    // concatLatestFrom((action) => this.store.select(cartSelectors.selectCart)),
    // concatMap(([action, cart]) =>
    //   this.cartService.saveCart(cart).pipe(
    //     concatMap(() => of(cartActions.saveCart())),                          
    //       concatMap(() => of(cartActions.clearAllCartItems())),                   
    //         concatMap(() => of(addressActions.clearAddresses())),                   
    //   ),          
    //))       
//   );
// }