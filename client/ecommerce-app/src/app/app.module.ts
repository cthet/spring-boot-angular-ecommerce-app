import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './components/products/products.module';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { MatCardModule } from '@angular/material/card';
import { CartDetailsModule } from './components/cart-details/cart-details.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    CartStatusComponent,
  ],
  imports: [
    CartDetailsModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    ProductsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
