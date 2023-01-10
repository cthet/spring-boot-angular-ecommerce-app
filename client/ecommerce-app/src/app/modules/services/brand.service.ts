import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';
import { responseBrands } from '../../models/responseBrands';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  fetchBrandsByGenderId(genderId: number): Observable<responseBrands> {
    return this.http.get<responseBrands>(
      `http://localhost:8080/api/category/brands?genderId=${genderId}`
    );
  }

  fetchBrandByGenderIdAndBrandId(
    genderId: number,
    brandId: number
  ): Observable<Brand> {
    return this.http.get<Brand>(
      `http://localhost:8080/api/category/brand/${brandId}?genderId=${genderId}`
    );
  }
}
