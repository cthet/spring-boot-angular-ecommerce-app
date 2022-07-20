import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './user/user.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/utility/auth-interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProfileComponent, UserComponent, AddressComponent],
  imports: [
    SharedModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
  exports: [UserComponent, AddressComponent],
  providers: [authInterceptorProviders],
})
export class ProfileModule {}
