import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home-view',
  template: `
    <div class="row">
      <div class="col-sm-6 women-container">
        <button
          class="gender-btn"
          mat-raised-button
          [ngStyle]="{'background-color': backgroundColor, 'color':fontColor}" 
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
          [ngStyle]="{'background-color': backgroundColor, 'color':fontColor}" 
          routerLink="/homme"
          (click)="gender.emit('men')"
        >
          Homme
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./landing-page-view.component.css'],
})
export class LandingPageViewComponent {
  backgroundColor:string = "#000";
  fontColor: string = "#f1f1f1";
  
  @Output() gender = new EventEmitter<string>();
}
