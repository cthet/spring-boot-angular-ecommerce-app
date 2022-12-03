import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../core/components/pagenotfound.component';
import { HomePageComponent } from './containers/home-page.component';

const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent,
  },

    ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
