import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap, take } from 'rxjs';
import { orderActions } from 'src/app/store/actions';
import { cartSelectors } from 'src/app/store/selectors';
import { UserService } from '../../profile/services/user.service';
import { CheckoutPaymentViewComponent } from '../components/checkout-payment-view.component';
import { CheckoutService } from '../services/checkout.service';
import { addressSelectors } from '../store/selectors';

@Component({
  selector: 'app-typing-checkout-payment-page',
  template: `<app-checkout-payment-view [paymentFormGroup]="paymentFormGroup" (onSubmit)="onSubmit()"></app-checkout-payment-view>`
})

export class TypingPaymentPageComponent implements OnInit {
  paymentFormGroup!: FormGroup;
  @ViewChild(CheckoutPaymentViewComponent) checkoutPaymentView!: CheckoutPaymentViewComponent;

  constructor(private store: Store, private formBuilder: FormBuilder, private checkoutService: CheckoutService, private userService: UserService) {} 
   
  ngOnInit(): void {   
    this.paymentFormGroup = this.formBuilder.group({});  
  }

  onSubmit(): void {
    const stripe = this.checkoutPaymentView.stripe;
    const card = this.checkoutPaymentView.cardElement;

    this.store.select(cartSelectors.selectCartItemsTotalPrice)
        .pipe(
            switchMap(totalPrice => this.checkoutService.createPaymentIntent({totalPrice: Math.round(totalPrice * 100), currency: 'EUR'})),
            switchMap(paymentIntentResponse =>
                this.userService.getUserProfile().pipe(
                    switchMap(userProfile =>
                        this.store.select(addressSelectors.selectShippingAddress).pipe(
                            map(address => ([paymentIntentResponse, userProfile, address]))
                        )
                    )
                )
            ),
            switchMap(([paymentIntentResponse, userProfile, address]) =>
                stripe.confirmCardPayment(paymentIntentResponse.client_secret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: userProfile.firstName,
                            address: {
                                line1: address.street,
                                city: address.city,
                                postal_code: address.postCode,
                                country: address.country.code,
                            }
                        }
                    }
                }, {handleActions: false})
            ),
            switchMap(async () => this.store.dispatch(orderActions.saveOrder())),
            catchError(async (error) => alert(`Il y a eu une erreur: ${error}`))
        )
        .pipe(take(1)).subscribe()
  }
    
}

