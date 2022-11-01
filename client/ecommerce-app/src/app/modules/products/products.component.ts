import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setVideo } from '../shared/navbar/store/navbar.actions';
import { loadBrandByBrandId } from './brand/store/brand.actions';
import { loadApparelCategoriesByBrandId } from './products-category/store/product-category.action';
import { loadProductsByBrandId } from './products-list/store/product-list.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() brand!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(setVideo());
  }

  dispatchBrandDatas(brand: number) {
    this.store.dispatch(
      loadBrandByBrandId({
        brandId: brand,
      })
    );
    this.store.dispatch(
      loadApparelCategoriesByBrandId({
        brandId: brand,
      })
    );
    this.store.dispatch(
      loadProductsByBrandId({
        brandId: brand,
      })
    );
  }
}
