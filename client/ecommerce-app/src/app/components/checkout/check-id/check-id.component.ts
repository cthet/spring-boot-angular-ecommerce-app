import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-id',
  templateUrl: './check-id.component.html',
  styleUrls: ['./check-id.component.css'],
})
export class CheckIdComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}
