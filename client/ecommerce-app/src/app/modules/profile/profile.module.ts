import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './containers/profile-page.component';
import { ProfileComponent } from './components/profile.component';
import { SharedModule } from '../../shared/shared.module';

export const COMPONENTS = [ProfileComponent];

export const CONTAINERS = [ProfilePageComponent]


@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    SharedModule,
    ProfileRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ProfileModule {}
