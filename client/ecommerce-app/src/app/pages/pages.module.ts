import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './containers/home-page.component';
import { HomeViewComponent } from './components/home-view.component';

const COMPONENTS = [HomeViewComponent]

const CONTAINERS = [HomePageComponent]

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    PagesRoutingModule,  
  ]
})
export class PagesModule { }
