
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthFeatureKey, reducers } from './store';
import { SharedModule } from '../../shared/shared.module';
import { AuthPageComponent } from './containers/auth-page.component';
import { LoginPageComponent} from './containers/login-page.component';
import { SignupPageComponent } from './containers/signup-page.component';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { SignupEffects } from './store/effects/signup.effects';
import { LoginEffects } from './store/effects/login.effects';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

export const COMPONENTS = [LoginComponent, SignupComponent];

export const CONTAINERS = [
  AuthPageComponent,
  LoginPageComponent,
  SignupPageComponent,
];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    SharedModule,
    AuthRoutingModule,    
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,    
    StoreModule.forFeature(AuthFeatureKey, reducers), 
    EffectsModule.forFeature([LoginEffects, SignupEffects]),
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AuthModule {}
