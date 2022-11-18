import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/utility/interceptors/auth-interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileComponent } from './components/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

export const COMPONENTS = [ProfileComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    ProfileRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [authInterceptorProviders],
})
export class ProfileModule {}
