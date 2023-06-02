import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './containers/profile-page.component';
import { ProfileComponent } from './components/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { UserOrdersPageComponent } from './containers/user-orders-page/user-orders-page.component';
import { UserOrdersViewComponent } from './components/user-orders-view/user-orders-view.component';
import {MatTableModule} from '@angular/material/table';

export const COMPONENTS = [ProfileComponent, UserOrdersViewComponent];

export const CONTAINERS = [ProfilePageComponent, UserOrdersPageComponent]


@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    SharedModule,
    ProfileRoutingModule,    
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,    
  ],
  exports: [],
})
export class ProfileModule {}
