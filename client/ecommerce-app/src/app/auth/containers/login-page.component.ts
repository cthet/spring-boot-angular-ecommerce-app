import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as authActions from '../actions/auth.actions';
import * as fromAuth from '../reducers/index';

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
  error$!: Observable<string>;

  constructor(private store: Store<Store>, private router: Router) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
    this.error$ = this.store.select(fromAuth.selectError);
  }

  ngOnInit(): void {}

  login() {
    if (this.loginFormGroup.valid) {
      this.store.dispatch(
        authActions.login({
          email: this.loginFormGroup.value.email,
          password: this.loginFormGroup.value.password,
        })
      );
    }
  }

  continueSignup() {
    if (this.emailFormControl.valid) {
      this.store.dispatch(
        authActions.setSignupEmail({ email: this.emailFormControl.value })
      );
    }
  }
}
// this.authService
//   .login(this.loginForm.value.email, this.loginForm.value.password)
//   .subscribe({
//     next: (authresponse: AuthResponse) => {
//       this.tokenStorage.saveToken(authresponse.token);
//       this.tokenStorage.saveUser({
//         email: authresponse.email,
//         role: authresponse.role,
//       });
//       this.isLoading = false;
//       this.authService.isConnected.next(true);
//       this.router.navigate(['/home']);
//     },
//     error: (err: Error) => {
//       this.isLoading = false;
//       this.error = err.message;
//     },
//   });

// computesloginForm() {
//   this.loginForm = new FormGroup({
//     email: new FormControl(null, [Validators.required, Validators.email]),
//     password: new FormControl(null, [
//       Validators.required,
//       Validators.minLength(8),
//       Validators.maxLength(40),
//     ]),
//   });
// }

// onLogin() {
//   if (this.loginForm.valid) {
//     this.authService
//       .login(this.loginForm.value.email, this.loginForm.value.password)
//       .subscribe({
//         next: (authresponse: AuthResponse) => {
//           this.tokenStorage.saveToken(authresponse.token);
//           this.tokenStorage.saveUser({
//             email: authresponse.email,
//             role: authresponse.role,
//           });
//           this.isLoading = false;
//           this.authService.isConnected.next(true);
//           this.router.navigate(['/home']);
//         },
//         error: (err: Error) => {
//           this.isLoading = false;
//           this.error = err.message;
//         },
//       });
//   }
//   return;
// }

// onSignup() {
//   if (this.loginForm.valid) {
//     this.authService
//       .signup(this.loginForm.value.email, this.loginForm.value.password)
//       .subscribe({
//         next: (message: any) => {
//           this.isLoading = false;
//           this.message = message.message;
//         },
//         error: (err: Error) => {
//           this.isLoading = false;
//           this.error = err.message;
//         },
//       });
//     this.loginForm.reset();
//   }
// }

// onHandleError() {
//   this.error = '';
//   this.message = '';
// }
