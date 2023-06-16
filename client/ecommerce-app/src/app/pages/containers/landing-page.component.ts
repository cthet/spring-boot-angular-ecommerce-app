import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Gender } from '../../models/Gender';
import { genderActions } from '../../store/actions';
import { genderSelectors } from '../../store/selectors';

@Component({
  selector: 'app-home-page',
  template: `
      <app-home-view  (gender)="setGender($event)"
    ></app-home-view>
  `,
})
export class LandingPageComponent {
  gender$: Observable<Gender | null>;

  constructor(private store: Store<Store>) {
    this.gender$ = this.store.select(genderSelectors.selectGender);    
  }

  setGender(gender: string) {
    if (gender === 'men') {
      this.store.dispatch(
        genderActions.setGender({ gender: { id: 1, type: 'homme' } })
      );
    } else {
      this.store.dispatch(genderActions.setGender({ gender: { id: 2, type: 'femme' } }));
    }
  }

}
