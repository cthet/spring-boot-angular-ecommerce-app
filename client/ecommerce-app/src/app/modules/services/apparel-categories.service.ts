import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseApparelCategories } from '../interfaces/responseApparelCategories';

@Injectable({
  providedIn: 'root',
})
export class ApparelCategoriesService {
  constructor(private http: HttpClient) {}

  fetchApparelCategoriesByGenderId(
    genderId: number
  ): Observable<responseApparelCategories> {
    return this.http.get<responseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}`
    );
  }

  fetchApparelCategoriesByGenderIdAndBrandId(
    genderId: number, brandId: number
  ): Observable<responseApparelCategories> {
    return this.http.get<responseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}&brandId=${brandId}`
    );
  }
}
