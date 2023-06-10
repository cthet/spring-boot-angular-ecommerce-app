import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addressActions } from '../store/actions';
import { addressSelectors } from '../store/selectors';

@Component({
  selector: 'app-checkout-page',
  template: `
  <div class="checkout-container">
    <div class="checkout-wrapper">
      <div class="row">

        <div class="col-md-8">
          <mat-stepper linear>
            <mat-step [stepControl]="addressValid">
              <ng-template matStepLabel>ADRESSE</ng-template>
              <app-checkout-address-page></app-checkout-address-page>           
            </mat-step>
             <mat-step >
              <ng-template matStepLabel>PAIEMENT</ng-template>
              <app-typing-checkout-payment-page></app-typing-checkout-payment-page>
            </mat-step>         
          </mat-stepper>
        </div>

        <div class="col-md-4 mt-4">
          <app-checkout-cart-page></app-checkout-cart-page>
        </div>

      </div>
    </div>
  </div>
  `,
  styles: [`
  .checkout-container {
    margin-top: 140px;
    height: 100%;
    background-color: #faf8f6;      
    overflow:hidden;    
  }  
  .checkout-wrapper{
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;   
    width: 100%;
    max-width: 73rem;
    padding-bottom: 50px;
  }
  `]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  addressValid = new FormControl('');
  subscription!: Subscription;
  
  constructor(private store: Store<Store>) {}

  ngOnInit(): void {
    this.setAddressState(this.addressValid);
  }
  
  setAddressState(control: FormControl) {
    this.subscription = this.store.select(addressSelectors.selectShippingAddress).subscribe((address) => {
      if(address){
        control.reset()
      } else {
        control.setErrors({"required": true });        
      }
 })    
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
      this.store.dispatch(addressActions.unsetAddress());
  }

}
