import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApparelCategoriesResponse } from '../models/ApparelCategoriesResponse';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ApparelCategoryService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchApparelCategoriesByGenderId(
    genderId: number
  ): Observable<ApparelCategoriesResponse> {
    return this.http.get<ApparelCategoriesResponse>(
      `${this.apiUrl}/category/apparels?genderId=${genderId}`
    ).pipe(catchError(this.handleError));
  }

  fetchApparelCategoriesByGenderIdAndBrandId(
    genderId: number,
    brandId: number
  ): Observable<ApparelCategoriesResponse> {
    return this.http.get<ApparelCategoriesResponse>(
      `${this.apiUrl}/category/apparels?genderId=${genderId}&brandId=${brandId}`
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //a client-side or network error occured. Handle it accordingly.
      console.log('An error occured:', error.error);
      return throwError(() => error.message);
    } else {
      // the backend returned an unsuccesful response code.
      // the response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was:`,
        error.error
      );
      return throwError(() => new Error(error.message));
    }
  }


}
