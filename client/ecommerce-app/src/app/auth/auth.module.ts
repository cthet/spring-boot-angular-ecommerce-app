import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { AuthPageComponent } from './containers/auth-page.component';
import { LoginPageComponent } from './containers/login-page.component';
import { SignupPageComponent } from './containers/signup-page.component';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import * as fromAuth from './reducers/auth-reducer';

export const COMPONENTS = [LoginComponent, SignupComponent];

export const CONTAINERS = [
  AuthPageComponent,
  LoginPageComponent,
  SignupPageComponent,
];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    AuthRoutingModule,
    SharedModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    StoreModule.forFeature(fromAuth.AuthFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AuthModule {}
