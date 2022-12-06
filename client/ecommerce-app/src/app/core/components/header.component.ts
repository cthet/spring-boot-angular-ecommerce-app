import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gender } from '../../models/gender';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <nav class="header-container">
      <div class="navbar-container">
        <!--gender-->
        <div class="gender-links col-xs-5">
          <a
            [ngStyle]="gender?.id == 1? {'color':  'rgb(179, 117, 60)' } : null"
            routerLink="/homme"
            class="men"
            (click)="selectGender.emit('men')"
            >homme</a
          >
          <i class="fas fa-grip-lines-vertical"></i>
          <a
          [ngStyle]="gender?.id == 2? {'color':  'rgb(179, 117, 60)' } : null"
            routerLink="/femme"
            class="women"
            (click)="selectGender.emit('women')"
            >femme</a
          >
        </div>

        <!--E-commerce Brand-->
        <a routerLink="/" class="brand col-xs-2 justify-content-center">Shop</a>

        <div class="right-links col-xs-5">
          <!--authentication-->
          <a
            *ngIf="!isLoggedIn"
            routerLink="/connexion"
            class="fa fa-user auth"
          >
          </a>

          <!--logout-->
          <a
            *ngIf="isLoggedIn"
            class="fa fa-user nav-item"
            (click)="logout.emit()"
          >
          </a>

          <!--profile-->
          <a
            *ngIf="isLoggedIn"
            routerLink="/profile"
            class="fa fa-user"
          >
          </a>

          <!--Cart-->
          <a
            [routerLink]="['panier']"
            class="fa fa-shopping-bag cart"
          >
            <span class="text-quantity">{{ totalQuantity }} </span>
          </a>
        </div>
      </div>
    </nav>
</header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() gender!: Gender | null;
  @Input() isLoggedIn!: Boolean | null;
  @Input() totalQuantity!: number | null;

  @Output() selectGender = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
}
