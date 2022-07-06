import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  customer: Customer = new Customer();
  signupForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
      ]),
    });
  }

  onLogin() {
    console.log(this.signupForm.value.email, this.signupForm.value.password);
    this.authService.login(
      this.signupForm.value.email,
      this.signupForm.value.password
    );
  }

  onSignup() {
    console.log(this.signupForm.value.email, this.signupForm.value.password);
    this.authService.signup(
      this.signupForm.value.email,
      this.signupForm.value.password
    );
  }
}
