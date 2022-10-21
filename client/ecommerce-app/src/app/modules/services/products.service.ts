import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/models/product';
import { ResponseProducts } from '../interfaces/responseProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts(params: any): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(
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
