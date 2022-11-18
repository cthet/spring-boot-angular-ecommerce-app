import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/interfaces/User';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { HeaderActions } from '../actions';

@Component({
  selector: 'app-header',
  template: `
    <nav class="header-container">
      <div class="navbar-container">
        <!--gender-->
        <div class="gender-links">
          <a
            routerLink="/homme"
            routerLinkActive="active"
            class="men"
            (click)="gender.emit('M')"
            >homme</a
          >
          <i class="fas fa-grip-lines-vertical"></i>
          <a
            routerLink="/femme"
            routerLinkActive="active"
            class="women"
            (click)="gender.emit('F')"
            >femme</a
          >
        </div>

        <!--E-commerce Brand-->
        <a routerLink="/" class="brand">Shop</a>

        <div class="right-links">
          <!--authentication-->
          <a
            *ngIf="id == null"
            routerLink="/connexion"
            routerLinkActive="active"
            class="fa fa-user auth"
          >
          </a>

          <!--logout-->
          <a
            *ngIf="id != null"
            class="nav-item"
            routerLink="/home"
            (click)="logout.emit()"
          >
            Logout
          </a>

          <!--profile-->
          <a
            *ngIf="id != null"
            routerLink="/profile"
            routerLinkActive="active"
            class="fa fa-user"
          >
          </a>

          <!--Cart-->
          <a
            routerLink="/cart"
            routerLinkActive="active"
            class="fa fa-shopping-bag cart"
          >
            <span class="text-quantity">{{ totalQuantity }} </span>
          </a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() user!: User | null;
  @Input() totalQuantity!: number | null;

  @Output() gender = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  get id(){
    if(this.user != null) return this.user.id;
    return;
  }

}
