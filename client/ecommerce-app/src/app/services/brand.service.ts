import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BrandsResponse } from '../models/BrandsResponse';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  constructor(private http: HttpClient) {}

  fetchBrandsByGenderId(genderId: number): Observable<BrandsResponse> {
    return this.http.get<BrandsResponse>(
      `http://localhost:8080/api/category/brands?genderId=${genderId}`
    ).pipe(catchError(this.handleError));
  }

  fetchBrandsByGenderIdAndApparelCategoryId(
    genderId: number,
    apparelCategoryId: number
  ): Observable<BrandsResponse> {
    return this.http.get<BrandsResponse>(
      `http://localhost:8080/api/category/brands?genderId=${genderId}&apparelCategoryId=${apparelCategoryId}`
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
