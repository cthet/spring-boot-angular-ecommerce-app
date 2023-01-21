import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap} from 'rxjs';
import { CheckoutService } from 'src/app/modules/services/checkout.service';
import { orderActions } from 'src/app/store/actions';
import { cartSelectors } from 'src/app/store/selectors';
import { checkoutActions } from '../actions';

@Injectable()
export class CheckoutEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private checkoutService: CheckoutService
  ) {}

  // setPaymentInfo$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(checkoutActions.setPaymentInfo),
  //   concatLatestFrom((action) => this.store.select(cartSelectors.selectCartItemsTotalPrice)),    
  //   map(([action, totalPrice]) => {
  //        return checkoutActions.setPaymentInfoSuccess({paymentInfo: {totalPrice: Math.round(totalPrice * 100), currency: 'EUR'}})
  //   }
  // ))
  // );

  createPaymentIntent$ = createEffect(() =>
  this.actions$.pipe(
    ofType(checkoutActions.createPaymentIntent),
    concatLatestFrom((action) => this.store.select(cartSelectors.selectCartItemsTotalPrice)),     
    mergeMap(([action, totalPrice]) =>           
        this.checkoutService.createPaymentIntent({totalPrice: Math.round(totalPrice * 100), currency: 'EUR'})
        //  .pipe(
        //   switchMap((paymentIntentResponse) =>           
          // action.stripe.confirmCardPayment(paymentIntentResponse.client_secret,
          //   {
          //     payment_method: {
          //       card: action.card,
          //       billing_details: {}
          //     }
          //   }, {handleActions: false}).
          .pipe(catchError((error) => of(checkoutActions.createPaymentIntentFailure({ error }))))),          
          map(() => 
          orderActions.saveOrder())
      ))
    )
  )  
;

  // createPaymentIntentSuccess$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(checkoutActions.createPaymentIntentSuccess), 
  //   map((action) =>           

  //   switchMap
  //     )         
  //   ))
  // );    


}



//   createPaymentIntentSuccess$ = createEffect(() => 
//   this.actions$.pipe(
//     ofType(checkoutActions.createPaymentIntentSuccess),
//     switchMap((action) =>  ([
// ]
//       )),  
//   ));

// )
// orderActions.saveOrder()
// ),

