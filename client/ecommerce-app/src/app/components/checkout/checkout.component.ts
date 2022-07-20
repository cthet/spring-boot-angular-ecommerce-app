import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  user!: User;

  checkid = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
    });
  }
}
