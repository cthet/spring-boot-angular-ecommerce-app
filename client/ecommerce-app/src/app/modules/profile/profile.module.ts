import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/utility/auth-interceptor';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
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
