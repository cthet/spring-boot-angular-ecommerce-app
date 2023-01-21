
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './containers/auth-page.component';
import { LoginPageComponent } from './containers/login-page.component';
import { SignupPageComponent } from './containers/signup-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: 'signup',
        component: SignupPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AuthRoutingModule {}
