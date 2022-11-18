import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import * as authActions from '../actions/auth.actions';
import * as fromAuth from '../reducers/index';

@Component({
  selector: 'app-signup-page',
  template: `
    <app-signup
      [signup]="signupForm"
      [email]="email$ | async"
      [error]="error$ | async"
      (signupAction)="signup()"
    ></app-signup>
  `,
})
export class SignupPageComponent implements OnInit {
  email$!: Observable<string>;
  error$!: Observable<string>;
  signupForm!: FormGroup;
  radioError: string = '';

  constructor(
    private store: Store<Store>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select(fromAuth.selectSignupEmail)
      .pipe(take(1))
      .subscribe(
        (email) =>
          (this.signupForm = new FormGroup({
            civility: new FormControl('Madame', [Validators.required]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl(email, [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]),
          }))
      );
    this.error$ = this.store.select(fromAuth.selectError);
  }

  signup() {
    if (this.signupForm.valid) {
      this.store.dispatch(
        authActions.signup({
          firstName: this.signupForm.value.firstName,
          lastName: this.signupForm.value.lastName,
          email: this.signupForm.value.email,
          password: this.signupForm.value.password,
        })
      );
      this.router.navigate(['./profil']);
    }
    return;
  }
}
