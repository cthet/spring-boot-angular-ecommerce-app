import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandsResponse } from 'src/app/models/BrandsResponse';
import { Brand } from '../../models/Brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  fetchBrandsByGenderId(genderId: number): Observable<BrandsResponse> {
    return this.http.get<BrandsResponse>(
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
