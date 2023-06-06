
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signupActions } from '../store/actions';
import { signupSelectors } from '../store/selectors';

@Component({
  selector: 'app-signup-page',
  template: `
    <app-signup    
      [signup]="signupForm"
      [email]="email$ |async"
      [error]="error$ | async"
      (signupAction)="signup()"
    ></app-signup>
  `,
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;
  email$!: Observable<string | null>;
  error$!: Observable<string | null>;
  radioError: string = '';

  constructor(
    private store: Store<Store>,
  ) {
    this.signupForm = new FormGroup({
      civility: new FormControl<number>(2, Validators.required),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(40)])
    });
    this.email$ = this.store.select(signupSelectors.selectSignupEmail);
    this.error$ = this.store.select(signupSelectors.selectSignupError);
  }

  ngOnInit(): void {}

  signup() {
    if (this.signupForm?.valid) {
      this.store.dispatch(
        signupActions.signup({
          civility: this.signupForm.value.civility,
          firstName: this.signupForm.value.firstName,
          lastName: this.signupForm.value.lastName,
          email: this.signupForm.value.email,
          password: this.signupForm.value.password,
        })
      );
    }
  }
}
