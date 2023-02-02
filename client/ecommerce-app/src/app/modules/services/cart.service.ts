import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cart } from '../../models/Cart';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  constructor(private http: HttpClient) {}

  fetchCart(): Observable<Cart> {
    return this.http.get<Cart>(
      `http://localhost:8080/api/cart/user`
    ).pipe(catchError(this.handleError));
  }


  saveCart(cart: Cart): Observable<any> {
    return this.http
      .post(
        `http://localhost:8080/api/cart/user`, cart)
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


