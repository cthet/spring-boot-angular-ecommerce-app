import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

export interface AuthResponse {
  token: string;
  type: string;
  user: { email: string; role: string };
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  customer: Customer = new Customer();
  loginForm!: FormGroup;
  isLoading = false;
  isRegistered = false;
  isSucessful = false;
  error: string = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.computesloginForm();
    console.log(this.error);
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
            this.tokenStorage.saveUser(authresponse.user);
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
          next: () => {
            this.isLoading = false;
            this.isSucessful = true;
          },
          error: (err: Error) => {
            this.isLoading = false;
            this.error = err.message;
          },
        });
    }
  }

  onHandleError() {
    this.error = '';
    this.isSucessful = false;
  }
}
