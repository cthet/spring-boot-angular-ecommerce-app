// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { User } from 'src/app/modules/models/user';
// import { UserService } from 'src/app/modules/services/user.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css'],
// })
// export class UserComponent implements OnInit {
//   userForm!: FormGroup;
//   isLoading = false;
//   message: string = '';
//   error: string = '';

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.computesUserForm();
//   }

//   computesUserForm() {
//     this.userForm = new FormGroup({
//       firstName: new FormControl(null, [Validators.required]),
//       lastName: new FormControl(null, [Validators.required]),
//     });
//   }

//   updateUser() {
//     this.isLoading = true;

//     let user = new User();
//     user[`firstName`] = this.userForm.value.firstName;
//     user[`lastName`] = this.userForm.value.lastName;

//     this.userService.updateUser(user).subscribe({
//       next: (response: { message: string }) => {
//         this.isLoading = false;
//         this.message = response.message;
//       },
//       error: (err: Error) => {
//         this.isLoading = false;
//         this.error = err.message;
//       },
//     });

//     this.userForm.reset();
//   }

//   onHandleError() {
//     this.error = '';
//   }
// }
