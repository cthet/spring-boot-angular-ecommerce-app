import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home-view',
  template: `
    <div class="row">
      <div class="col-sm-6 women-container">
        <button
          class="gender-btn"
          mat-raised-button
          routerLink="/femme"
          (click)="gender.emit('women')"
        >
          Femme
        </button>
      </div>
      <div class="col-sm-6 men-container">
        <button
          class="gender-btn"
          mat-raised-button
          routerLink="/homme"
          (click)="gender.emit('men')"
        >
          Homme
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent {
  @Output() gender = new EventEmitter<string>();
}
