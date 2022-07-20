import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-id',
  templateUrl: './check-id.component.html',
  styleUrls: ['./check-id.component.css'],
})
export class CheckIdComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  onEdit = false;
  userForm!: FormGroup;
  message: string = '';
  error: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.computesUserForm();
    this.fetchUser();
  }

  computesUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
    });
  }

  fetchUser() {
    this.userService.getUser().subscribe((user: User) => {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    });
  }

  changeEditMode() {
    this.onEdit = !this.onEdit;
  }

  updateUser() {
    let user = new User();
    user[`firstName`] = this.userForm.value.firstName;
    user[`lastName`] = this.userForm.value.lastName;

    this.userService.updateUser(user).subscribe({
      next: (response: { message: string }) => {
        this.router.navigate(['/home']);
      },
      error: (err: Error) => {
        this.error = err.message;
      },
    });
  }

  onHandleError() {
    this.error = '';
  }
}
