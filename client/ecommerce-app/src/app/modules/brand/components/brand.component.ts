import { Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Brand } from '../../../models/Brand';

@Component({
  selector: 'app-brand',
  template: ` 
  <div class="brand-container">
      <h3 class="brand-title">{{ brand?.brand_category }}</h3>
      <p class="brand-desc">{{ brand!.description | truncate:[(limit$|async), '...']}}     
      </p>
      <button mat-raised-button class="button" (click) = "unTruncate()">{{text}}</button>
  </div>`,
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnDestroy{
  @Input() brand!: Brand | null;
  limit$: BehaviorSubject<number> = new BehaviorSubject(300);
  text = "agrandir";

  unTruncate(){
    if(this.limit$.getValue() === 300){
      this.limit$.next(this.brand!.description.length);
      this.text = "réduire";
    }else {
      this.limit$.next(300);
      this.text = "agrandir";
    }
  }

    ngOnDestroy(){
    this.limit$.unsubscribe();
    }
}
