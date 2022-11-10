import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
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

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoreModule {}