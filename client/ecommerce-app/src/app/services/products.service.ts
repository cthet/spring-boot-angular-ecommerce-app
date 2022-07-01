import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseProducts } from '../components/products/products-list/products-list.component';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts(params: any): Observable<responseProducts> {
    return this.http.get<responseProducts>(
      `http://localhost:8080/products/search`,
      { params }
    );
  }

  fetchProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:8080/products/${productId}`
    );
  }
}
