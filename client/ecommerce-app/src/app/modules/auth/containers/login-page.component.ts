import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginActions, signupActions } from '../store/actions';
import { loginSelectors } from '../store/selectors';


@Component({
  selector: 'app-login-page',
  template: `
    <app-login
      [login]="loginFormGroup"
      [email]="emailFormControl"
      [error]="error$ | async"
      (loginAction)="login()"
      (continue)="continueSignup()"
    ></app-login>
  `,
})
export class LoginPageComponent implements OnInit {
  loginFormGroup!: FormGroup;
  emailFormControl!: FormControl;
  error$!: Observable<string | null>;

  constructor(private store: Store<Store>) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
      ]),
    });
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.error$ = this.store.select(loginSelectors.selectLoginError);
  }

  ngOnInit(): void {}

  login() {
    if (this.loginFormGroup.valid) {
      this.store.dispatch(
        loginActions.login({
          credentials: {
            email: this.loginFormGroup.value.email,
            password: this.loginFormGroup.value.password,
          },
        })
      );
    }
  }

  continueSignup() {
    if (this.emailFormControl.valid) {
      const signupEmail = this.emailFormControl.value;
      this.store.dispatch(
        signupActions.setSignupEmail({ email: signupEmail })
      );
    }
  }
}
