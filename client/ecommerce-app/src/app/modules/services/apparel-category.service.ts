import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseApparelCategories } from '../../models/responseApparelCategories';

@Injectable({
  providedIn: 'root',
})
export class ApparelCategoryService {
  constructor(private http: HttpClient) {}

  fetchApparelCategoriesByGenderId(
    genderId: number
  ): Observable<responseApparelCategories> {
    return this.http.get<responseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}`
    );
  }

  fetchApparelCategoriesByGenderIdAndBrandId(
    genderId: number,
    brandId: number
  ): Observable<responseApparelCategories> {
    return this.http.get<responseApparelCategories>(
      `http://localhost:8080/api/category/apparels?genderId=${genderId}&brandId=${brandId}`
    );
  }


}
