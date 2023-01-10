import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Address } from 'src/app/models/address';
import { addressSelectors } from '../store/selectors';

@Component({
  selector: 'app-checkout-page',
  template: `
  <div class="checkout-container">
    <div class="checkout-wrapper">
      <div class="row">
        <div class="col-lg-8">
          <mat-stepper linear>
            <mat-step [completed]="completed">
              <ng-template matStepLabel>ADRESSE</ng-template>
              <app-checkout-address-page></app-checkout-address-page>           
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>PAIEMENT</ng-template>
              <app-checkout-delivery-page></app-checkout-delivery-page>
            </mat-step>        
          </mat-stepper>
        </div>
        <div class="col-lg-4">
          <app-checkout-cart-page></app-checkout-cart-page>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .checkout-container {
    margin-top: 140px;
    height: 100vh;
    background-color: #faf8f6;      
    overflow:hidden;
  }  
  .checkout-wrapper{
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;   
    width: 100%;
    max-width: 73rem;
  }
  `]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  completed = false;
  subscription!: Subscription;

  constructor(private router: Router, private store: Store<Store>) {    
    this.router.navigate(['/commande/addresse']);
   }

  ngOnInit(): void {
    this.isAddressStepperCompleted();
  }
  
  isAddressStepperCompleted() {
    this.subscription = this.store.select(addressSelectors.selectAddress).subscribe((address) => {
        if(address){
          this.completed === true;
        } else {
          this.completed === false;
        }
    })    
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
