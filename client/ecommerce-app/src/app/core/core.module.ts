import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { AppComponent } from './containers/app.component';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
];

export const CONTAINERS = [];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoreModule {}
