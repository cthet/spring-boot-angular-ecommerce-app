import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/products/models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  fetchBrandByGenderIdAndBrandId(
    genderId: number,
    brandId: number
  ): Observable<Brand> {
    return this.http.get<Brand>(
      `http://localhost:8080/api/category/brand/${brandId}?genderId=${genderId}`
    );
  }
}
