import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { OrderBuilder, Order } from '../../models/Order';
import { addressSelectors } from '../../modules/checkout/store/selectors';
import { OrderService } from '../../services/order.service';
import { cartActions, orderActions } from '../actions';
import { cartSelectors, genderSelectors } from '../selectors';
import { OrdersResponse } from 'src/app/models/OrdersResponse';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private store: Store,
    private router: Router
  ) {}

  saveOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.saveOrder),
      concatLatestFrom((action) => [
        this.store.select(cartSelectors.selectAllCartItems),
        this.store.select(addressSelectors.selectShippingAddress),
        this.store.select(cartSelectors.selectCartItemsTotalPrice),
        this.store.select(cartSelectors.selectCartItemsTotalQuantity),
      ]),
      map(([action, cartItems, address, totalPrice, totalQuantity]) => {
        const order = new OrderBuilder({
          orderItems: cartItems,
          shippingAddress: address!,
          totalPrice: totalPrice,
          totalQuantity: totalQuantity,
        }).buildNewOrder();
        return order;
      }),
      switchMap((order: Order) =>
        this.orderService.saveOrder(order).pipe(
          map((order: Order) => orderActions.saveOrderSuccess({ order })),
          catchError((error) =>
            of(orderActions.saveOrderFailure({ error: error.message }))
          )
        )
      )
    )
  );

  saveOrdersSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.saveOrderSuccess),
      concatLatestFrom((action) =>
        this.store.select(genderSelectors.selectGender)
      ),
      concatMap(([action, gender]) =>
        of(cartActions.saveCart()).pipe(
          concatMap(() =>
            of(cartActions.clearAllCartItems()).pipe(
              tap(() => {
                if (gender) {
                  this.router.navigate([`/`, `${gender?.type}`]);
                }
              })
            )
          )
        )
      )
    )
  );

  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.loadOrders),
      mergeMap((action) =>
        this.orderService.fetchOrders().pipe(
          map((responseOrders: OrdersResponse) =>
            orderActions.loadOrdersSuccess({ ordersRes: responseOrders })
          ),
          catchError((error) =>
            of(orderActions.loadOrdersFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
