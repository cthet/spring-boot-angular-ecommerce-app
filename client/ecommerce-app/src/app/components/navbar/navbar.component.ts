import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private tokenstorage: TokenStorageService) {}

  ngOnInit(): void {}

  logout() {
    this.tokenstorage.logOut();
  }
}
