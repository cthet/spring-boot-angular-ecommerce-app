import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Gender } from 'src/app/models/Gender';
import { genderSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-empty-cart-page',
  template: `
  <app-empty-cart-view (continue)="continue()"></app-empty-cart-view>`,
})
export class EmptyCartPageComponent {
  gender$!: Observable< Gender | null>;

  constructor(private router: Router, private store: Store<Store>){
    this.gender$ = this.store.select(genderSelectors.selectGender);
  }
  
  continue(){
    this.gender$.pipe(take(1)).subscribe(gender =>
      this.router.navigate(['./',gender?.type]));
  } 

}
