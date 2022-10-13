import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/services/products.service';
import { Product } from 'src/app/modules/interfaces/models/product';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

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
  @Input()
  genderId: number = 1;
  @Input()
  apparelsId: number = 0;
  @Input()
  priceRangeId: number = 0;
  page: number = 0;
  size: number = 12;
  total_items!: number;
  total_pages!: number;

  products!: Product[];
  gender!: string;

  private productsList: Subscription = new Subscription();

  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  onSelectGender(GenderId: number) {
    this.genderId = GenderId;
    this.fetchProducts();
  }

  onSelectApparels(ApparelsId: number) {
    this.apparelsId = ApparelsId;
    this.fetchProducts();
  }

  onSelectPriceRange(PriceRange: number) {
    this.priceRangeId = PriceRange;
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
      this.genderId,
      this.apparelsId,
      this.priceRangeId,
      this.page,
      this.size
    );

    this.productsList = this.ProductsService.fetchProducts(params).subscribe(
      (response: responseProducts) => {
        this.products = response.products;
        this.total_items = response.total_items;
        this.total_pages = response.total_pages;
        this.gender = this.route.snapshot.params['gender'];
      }
    );
  }

  handlePageEvent(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.productsList.unsubscribe();
  }
}
