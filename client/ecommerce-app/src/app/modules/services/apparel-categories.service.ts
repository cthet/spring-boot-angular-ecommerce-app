import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApparelCategories } from '../interfaces/responseApparelCategories';

@Injectable({
  providedIn: 'root',
})
export class ApparelCategoriesService {
  constructor(private http: HttpClient) {}

  fetchApparelCategoriesByGenderId(
    genderId: number
  ): Observable<ResponseApparelCategories> {
    return this.http.get<ResponseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}`
    );
  }

  fetchApparelCategoriesByGenderIdAndBrandId(
    genderId: number, brandId: number
  ): Observable<ResponseApparelCategories> {
    return this.http.get<ResponseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}&brandId=${brandId}`
    );
  }
}
