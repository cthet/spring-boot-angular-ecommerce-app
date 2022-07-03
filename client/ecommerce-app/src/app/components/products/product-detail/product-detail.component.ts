import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  gender!: string;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.gender = this.route.snapshot.params['gender'];
    const productId = this.route.snapshot.params['id'];
    this.productService
      .fetchProduct(productId)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  addToCart(): void {}
}
