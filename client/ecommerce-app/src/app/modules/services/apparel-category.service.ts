import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApparelCategoriesResponse } from 'src/app/models/ApparelCategoriesResponse';

@Injectable({
  providedIn: 'root',
})
export class ApparelCategoryService {
  constructor(private http: HttpClient) {}

  fetchApparelCategoriesByGenderId(
    genderId: number
  ): Observable<ApparelCategoriesResponse> {
    return this.http.get<ApparelCategoriesResponse>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}`
    );
  }

  fetchApparelCategoriesByGenderIdAndBrandId(
    genderId: number,
    brandId: number
  ): Observable<ApparelCategoriesResponse> {
    return this.http.get<ApparelCategoriesResponse>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}&brandId=${brandId}`
    );
  }


}
