import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutPageComponent } from './containers/checkout-page.component';
import { CheckoutCartPageComponent } from './containers/checkout-cart-page.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutCartViewComponent } from './components/checkout-cart-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CheckoutAddressPageComponent } from './containers/checkout-address-page.component';
import { AddressListComponent } from './components/address-list.component';
import { AddressViewComponent } from './components/address-view.component';
import { SelectAddressPageComponent } from './containers/select-address-page.component';
import { TypingAddressPageComponent } from './containers/typing-address-page.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CheckoutFeatureKey, reducers } from './store';
import { AddressEffects } from './store/effects/address.effects';
import { CountryEffects } from './store/effects/country.effects';
import { CheckoutPaymentViewComponent } from './components/checkout-payment-view.component';
import { TypingPaymentPageComponent } from './containers/typing-payment-page.component';

export const COMPONENTS = [CheckoutCartViewComponent, CheckoutPaymentViewComponent, AddressViewComponent, AddressListComponent];

export const CONTAINERS = [CheckoutPageComponent, CheckoutAddressPageComponent, CheckoutCartPageComponent, TypingAddressPageComponent, SelectAddressPageComponent, TypingPaymentPageComponent];


@NgModule({
    declarations: [COMPONENTS, CONTAINERS],
    imports: [
        MatSelectModule,
        MatStepperModule,        
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        ReactiveFormsModule,
        CommonModule,
        CheckoutRoutingModule,
        StoreModule.forFeature(CheckoutFeatureKey, reducers),
        EffectsModule.forFeature([AddressEffects, CountryEffects]),        
    ],
    providers: [
        {
          provide: MAT_RADIO_DEFAULT_OPTIONS,
          useValue: { color: 'primary' },
        },
      ],
})
export class CheckoutModule {}
