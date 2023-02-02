import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HeaderPageComponent } from './containers/header-page.component';

import { AppComponent } from './containers/core.component';
import { PagenotfoundComponent } from './components/pagenotfound.component';
import {MatMenuModule} from '@angular/material/menu'; 

export const COMPONENTS = [FooterComponent, HeaderComponent, PagenotfoundComponent];

export const CONTAINERS = [AppComponent, HeaderPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatMenuModule
  ],
})
export class CoreModule {}
