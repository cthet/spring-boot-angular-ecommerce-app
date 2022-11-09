import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/profile/models/customer';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
export interface AuthResponse {
  token: string;
  email: string;
  role: string;
}
@Component({
  selector: 'app-auth',
  template: `
    <app-navbar></app-navbar>

    <div class="container">
      <div class="row login">
        <div
          *ngIf="message != ''"
          class="alert alert-success mx-auto"
          style="width: max-content"
        >
          <p>{{ message }}</p>
        </div>
        <div class="card">
          <div class="card-body">
            <form [formGroup]="loginForm">
              <div class="form-group">
                <p>
                  <label for="email"><h6>Email:</h6></label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    class="form-control"
                    autocomplete="on"
                  />
                  <span
                    *ngIf="
                      !loginForm.get('email')?.valid &&
                      loginForm.get('email')?.touched
                    "
                    >Enter a valid email*</span
                  >
                </p>
                <p>
                  <label for="password"><h6>Password:</h6></label>
                  <input
                    id="password"
                    type="password"
                    formControlName="password"
                    class="form-control"
                  />
                  <span
                    *ngIf="
                      !loginForm.get('password')?.valid &&
                      loginForm.get('password')?.touched
                    "
                    >Enter a valid password*
                    <p>(Your password must be 8 characters long at least)</p>
                  </span>
                </p>
                <div class="pe-sm-5">
                  <button
                    mat-raised-button
                    color="warn"
                    type="submit"
                    class="mb-2"
                    [disabled]="loginForm.invalid"
                    (click)="onLogin()"
                  >
                    Login
                  </button>
                  <hr />
                  Don't have an account yet?
                  <button
                    mat-stroked-button
                    color="warn"
                    type="submit"
                    class="mt-3"
                    [disabled]="loginForm.invalid"
                    (click)="onSignup()"
                  >
                    Signup
                  </button>
                  <mat-spinner *ngIf="isLoading"></mat-spinner>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  customer: Customer = new Customer();
  loginForm!: FormGroup;
  isLoading = false;
  isRegistered = false;
  error: string = '';
  message: string = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.computesloginForm();
    console.log('hello from authcomponent');
  }

  computesloginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
      ]),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (authresponse: AuthResponse) => {
            this.tokenStorage.saveToken(authresponse.token);
            this.tokenStorage.saveUser({
              email: authresponse.email,
              role: authresponse.role,
            });
            this.isLoading = false;
            this.authService.isConnected.next(true);
            this.router.navigate(['/home']);
          },
          error: (err: Error) => {
            this.isLoading = false;
            this.error = err.message;
          },
        });
    }
    return;
  }

  onSignup() {
    if (this.loginForm.valid) {
      this.authService
        .signup(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (message: any) => {
            this.isLoading = false;
            this.message = message.message;
          },
          error: (err: Error) => {
            this.isLoading = false;
            this.error = err.message;
          },
        });
      this.loginForm.reset();
    }
  }

  onHandleError() {
    this.error = '';
    this.message = '';
  }
}
