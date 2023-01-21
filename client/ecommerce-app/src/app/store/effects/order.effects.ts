import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap} from 'rxjs';
import { Order, OrderBuilder } from 'src/app/models/Order';
import { addressSelectors } from 'src/app/modules/checkout/store/selectors';
import { OrderService } from 'src/app/modules/services/order.service';
import { orderActions } from '../actions';
import { cartSelectors } from '../selectors';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private store: Store,
  ) {}

  saveOrder$ = createEffect(() =>
  this.actions$.pipe(
    ofType(orderActions.saveOrder),
    concatLatestFrom((action) => [      
      this.store.select(cartSelectors.selectAllCartItems),
      this.store.select(addressSelectors.selectShippingAddress),
      this.store.select(cartSelectors.selectCartItemsTotalQuantity),
      this.store.select(cartSelectors.selectCartItemsTotalPrice),
    ]),
    map(([action, cartItems, address, quantity, totalPrice]) => {
      const order = new OrderBuilder(cartItems, address!, quantity, totalPrice).buildNewOrder();
      return order;
    }),     
    switchMap((order: Order) => 
      this.orderService.saveOrder(order).pipe(
        map((order: Order) => 
          orderActions.saveOrderSuccess({order}),        
        ),           
        catchError((error) =>
          of(orderActions.saveOrderFailure({ error }))        
        )
      ),        
    ),     
  ));  

  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.loadOrders),
      mergeMap((action) =>        
        this.orderService.fetchOrders()
          .pipe(
            map((responseOrders) => 
            orderActions.loadOrdersSuccess({orders: responseOrders.orders}),          
            ),           
            catchError((error) =>
              of(orderActions.loadOrdersFailure({ error }))        
            )
          ),          
      )     
    ),
  );

}