import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { CoreComponent } from './containers/core.component';

export const COMPONENTS = [
  CoreComponent,
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
  bootstrap: [CoreComponent],
})
export class CoreModule {}
