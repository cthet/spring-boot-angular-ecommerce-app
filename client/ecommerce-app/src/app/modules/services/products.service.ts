import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from 'src/app/models/ProductsResponse';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts(params: any): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `http://localhost:8080/api/products`,
      { params }
    );
  }

  fetchProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:8080/api/product/${productId}`
    );
  }
}
