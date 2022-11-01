import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Brand } from '../../interfaces/models/brand';
import { selectBrand } from './store/brand.selector';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand$ = this.store.select(selectBrand);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
