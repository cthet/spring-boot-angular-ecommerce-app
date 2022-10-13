import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modules/interfaces/models/user';
import { CheckoutService } from 'src/app/modules/services/checkout.service';
import { UserService } from 'src/app/modules/services/user.service';

@Component({
  selector: 'app-check-id',
  templateUrl: './check-id.component.html',
  styleUrls: ['./check-id.component.css'],
})
export class CheckIdComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  onEdit = false;
  isLoading = false;
  userForm!: FormGroup;
  message: string = '';
  error: string = '';

  @Output() next = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.fetchUser();
    this.computesUserForm();
  }

  fetchUser() {
    this.userService.getUser().subscribe((user: User) => {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    });
  }

  onSelectUser() {
    this.isLoading = true;
    this.userService.getUser().subscribe({
      next: (user: User) => {
        this.checkoutService.user$.next(user);
        this.message = 'Receiver identity successfully selected !';
        this.isLoading = false;
        this.next.emit(true);
      },
      error: (err: Error) => {
        this.isLoading = false;
        this.error = err.message;
      },
    });
  }

  onEditMode() {
    this.onEdit = true;
    this.message = '';
    this.next.emit(false);
  }

  onUserInfo() {
    this.onEdit = false;
    this.message = '';
    this.next.emit(false);
  }

  computesUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
    });
  }

  onSelectReceiver() {
    let user = new User();
    user[`firstName`] = this.userForm.value.firstName;
    user[`lastName`] = this.userForm.value.lastName;
    if (this.userForm.valid) {
      this.checkoutService.user$.next(user);
      this.message = 'Receiver address successfully registered !';
      this.next.emit(true);
    }
    return;
  }

  onHandleError() {
    this.error = '';
  }
}
