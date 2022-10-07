import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/modules/utility/auth-interceptor';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';

// @NgModule({
//   declarations: [ProfileComponent, UserComponent, AddressComponent],
//   imports: [
//     SharedModule,
//     MatProgressSpinnerModule,
//     HttpClientModule,
//     CommonModule,
//     MatCardModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//     ProfileRoutingModule,
//   ],
//   exports: [UserComponent, AddressComponent],
//   providers: [authInterceptorProviders],
// })
// export class ProfileModule {}
