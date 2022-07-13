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
import { ProfileComponent } from './components/profile/profile.component';
import { authInterceptorProviders } from './utility/auth-interceptor';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { CartDetailsModule } from './components/cart-details/cart-details.module';
import { MembersComponent } from './components/members/members.component';
import { UserComponent } from './components/profile/user/user.component';
import { AddressComponent } from './components/profile/address/address.component';
import { ProfileModule } from './components/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
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
    ProfileModule,
    BrowserAnimationsModule,
    MatTableModule,
    CartDetailsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
