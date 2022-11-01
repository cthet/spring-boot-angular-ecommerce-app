import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { setGender } from '../header/store/header.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  setGender(gender: string) {
    if (gender === 'M') {
      this.store.dispatch(setGender({ gender: { id: 1, type: 'homme' } }));
    } else {
      this.store.dispatch(setGender({ gender: { id: 2, type: 'femme' } }));
    }
  }
}
