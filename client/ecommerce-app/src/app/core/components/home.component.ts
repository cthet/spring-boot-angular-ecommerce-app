import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeaderActions } from '../actions';


@Component({
  selector: 'app-home',
  template: `
    <div class="row">
      <div class="col-sm-6 women-container">
        <button
          class="gender-btn"
          mat-raised-button
          routerLink="/femme"
          (click)="setGender('F')"
        >
          Femme
        </button>
      </div>
      <div class="col-sm-6 men-container">
        <button
          class="gender-btn"
          mat-raised-button
          routerLink="/homme"
          (click)="setGender('M')"
        >
          Homme
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<Store>) {}

  ngOnInit(): void {}

  setGender(gender: string) {
    if (gender === 'M') {
      this.store.dispatch(
        HeaderActions.setGender({ gender: { id: 1, type: 'homme' } })
      );
    } else {
      this.store.dispatch(HeaderActions.setGender({ gender: { id: 2, type: 'femme' } }));
    }
  }
}
