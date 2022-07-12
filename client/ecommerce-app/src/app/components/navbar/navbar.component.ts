import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private tokenstorage: TokenStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  logout() {
    this.tokenstorage.logOut();
  }

  checkLoggedIn() {
    const token = this.tokenstorage.getToken();
    if (token) {
      this.authService.isConnected.next(true);
    } else {
      this.authService.isConnected.next(false);
    }

    this.authService.isConnected.subscribe((subscriber) => {
      this.isLoggedIn = subscriber;
    });
  }
}
