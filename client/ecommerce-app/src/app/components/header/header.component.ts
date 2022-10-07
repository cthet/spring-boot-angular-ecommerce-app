import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/services/auth.service';
import { TokenStorageService } from 'src/app/modules/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private tokenstorage: TokenStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  logout() {
    this.authService.logout();
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
