import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './containers/home-page.component';
import { HomeViewComponent } from './components/home-view.component';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [HomeViewComponent]

const CONTAINERS = [HomePageComponent]

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    PagesRoutingModule,  
    MatButtonModule
  ]
})
export class PagesModule { }
