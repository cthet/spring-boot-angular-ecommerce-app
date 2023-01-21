import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, switchMap, take, tap } from 'rxjs';
import { orderActions } from 'src/app/store/actions';
import { cartSelectors } from 'src/app/store/selectors';
import { UserService } from '../../profile/services/user.service';
import { CheckoutService } from '../../services/checkout.service';
import { CheckoutPaymentViewComponent } from '../components/checkout-payment-view.component';
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
   //          name: new FormControl('',[Validators.required]),
  //     number: new FormControl('',[Validators.required, this.creditCardValid()]),
  //     expirationDate: new FormControl('',[Validators.required, this.expirationDateValid()]),
  //     cvc: new FormControl('',[Validators.required, Validators.pattern('[0-9]{3}')]),  
  }

  onSubmit(): void {   
    const stripe = this.checkoutPaymentView.stripe;
    const card = this.checkoutPaymentView.cardElement;

    this.store.select(cartSelectors.selectCartItemsTotalPrice).pipe(
      map(totalPrice =>        
          map(() =>    [   
            this.checkoutService.createPaymentIntent({totalPrice: Math.round(totalPrice * 100), currency: 'EUR'}),
            this.userService.getUserProfile(),
            this.store.select(addressSelectors.selectShippingAddress)
          ]),
          map(([paymentIntentResponse, userProfile, address]) => 
            stripe.confirmCardPayment(paymentIntentResponse.client_secret,
              {
                payment_method: {
                  card: card,
                  billing_details: {
                    email: userProfile.email,
                    name: userProfile.firstName,
                    address: {
                        line1: address.street,
                    }
                  }
                }
              }, {handleActions: false})
            .pipe(catchError(async (error) => alert(`Il y a eu une erreur: ${error}`))))
            )).pipe(take(1)).subscribe(),          
            this.store.dispatch(orderActions.saveOrder())
                              
        
        }        
    
}


  //   this.months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  //   this.years = ['2023','2024','2025','2026', '2027', '2028', '2029'];
  //   this.paymentForm = new FormGroup({
  //     name: new FormControl('',[Validators.required, this.notOnlyWhiteSpace()]),
  //     number: new FormControl('',[Validators.required, this.creditCardValid()]),
  //     expirationDate: new FormControl('',[Validators.required, this.expirationDateValid()]),
  //     cvc: new FormControl('',[Validators.required, Validators.pattern('[0-9]{3}')]),
  //  })