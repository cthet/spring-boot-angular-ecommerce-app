import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductsResponse } from 'src/app/models/ProductsResponse';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  fetchProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:8080/api/product/${productId}`
    ).pipe(catchError(this.handleError));
  }

  fetchProducts(params: any): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `http://localhost:8080/api/product`,
      { params }
    ).pipe(catchError(this.handleError));
  }

  fetchNewProducts(params: any): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `http://localhost:8080/api/product/new`,
      { params }
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
