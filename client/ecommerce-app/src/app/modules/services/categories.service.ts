import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  responseApparels,
  responsePriceRange,
} from '../products-category/products-category.component';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  fetchApparelCategories(params: any): Observable<responseApparels> {
    return this.http.get<responseApparels>(
      `http://localhost:8080/category/apparels`,
      {
        params,
      }
    );
  }

  fetchPriceRangeCategories(): Observable<responsePriceRange> {
    return this.http.get<responsePriceRange>(
      `http://localhost:8080/category/price_range`
    );
  }
}
