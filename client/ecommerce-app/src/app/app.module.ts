import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './components/products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { MatTableModule } from '@angular/material/table';
import { AuthModule } from './components/auth/auth.module';
import { authInterceptorProviders } from './utility/auth-interceptor';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './components/members/members.component';
import { ProfileModule } from './components/profile/profile.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckIdComponent } from './components/checkout/check-id/check-id.component';
import { CheckAddressComponent } from './components/checkout/check-address/check-address.component';
import { CheckPaymentComponent } from './components/checkout/check-payment/check-payment.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutModule } from './components/checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    HomeComponent,
    NavbarComponent,
    CartStatusComponent,
    FooterComponent,
    MembersComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AuthModule,
    ProductsModule,
    CheckoutModule,
    ProfileModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
