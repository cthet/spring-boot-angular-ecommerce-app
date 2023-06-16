import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { LandingPageComponent } from './containers/landing-page.component';
import { LandingPageViewComponent } from './components/landing-page-view.component';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [LandingPageViewComponent]

const CONTAINERS = [LandingPageComponent]

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    PagesRoutingModule,  
    MatButtonModule
  ]
})
export class PagesModule { }
