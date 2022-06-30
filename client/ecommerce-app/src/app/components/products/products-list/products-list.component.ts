import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

export interface responseProducts {
  products: Product[];
  current_page: number;
  size: number;
  total_items: number;
  total_pages: number;
}
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  gender: number = 1;
  @Input()
  apparelsId: number = 0;
  priceRangeId: number = 0;
  page: number = 0;
  size: number = 0;
  src = 'src/';

  products!: Product[];

  private productsList: Subscription = new Subscription();

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  getRequestParams(
    gender: number,
    apparel: number,
    priceRange: number,
    page: number,
    size: number
  ): any {
    let params: any = {};
    if (gender) {
      params[`gender`] = gender;
    }
    if (apparel) {
      params[`apparel`] = apparel;
    }
    if (priceRange) {
      params[`priceRange`] = priceRange;
    }
    if (page) {
      params[`page`] = page;
    }
    if (size) {
      params[`size`] = size;
    }
    return params;
  }

  fetchProducts(): void {
    const params = this.getRequestParams(
      this.gender,
      this.apparelsId,
      this.priceRangeId,
      this.page,
      this.size
    );

    this.ProductsService.fetchProducts(params).subscribe(
      (response: responseProducts) => {
        this.products = response.products;
        console.log(this.products);
      }
    );
  }

  ngOnDestroy(): void {
    this.productsList.unsubscribe();
  }
}
