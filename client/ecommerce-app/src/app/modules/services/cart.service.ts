import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cart } from '../../models/Cart';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  fetchCart(): Observable<Cart> {
    return this.http.get<Cart>(
      `${this.apiUrl}/cart`
    ).pipe(catchError(this.handleError));
  }


  saveCart(cart: Cart): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/cart`, cart)
      .pipe(catchError(this.handleError));
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


