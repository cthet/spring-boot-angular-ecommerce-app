import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of, switchMap, take, tap } from 'rxjs';
import { CartService } from '../../modules/services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { authActions, cartActions } from '../actions';
import { cartSelectors } from '../selectors';
import { addressActions } from 'src/app/modules/checkout/store/actions';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store<Store>,
    private router: Router
  ) {}

  clearUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(authActions.clearUser),
    tap((() => this.store.dispatch(cartActions.saveCart()))),
    concatMap((action) => this.actions$.pipe(
      ofType(cartActions.saveCartSuccess),
      take(1)
    )),    
    tap(() => {
      this.store.dispatch(cartActions.clearAllCartItems()),
      this.store.dispatch(addressActions.clearAddresses()),
      this.store.dispatch(authActions.clearUserSuccess()),
      this.localStorageService.logout();   
      this.router.navigate(['']);
      }),
      catchError((error) => of(authActions.clearUserFailure({ error: error.message }))
      )
    )
  )
}
