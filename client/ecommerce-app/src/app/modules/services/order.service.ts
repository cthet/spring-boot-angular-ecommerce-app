import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  fetchOrders(): Observable<Order> {
    return this.http.get<Order>(
      `http://localhost:8080/api/user/order`
    ).pipe(catchError(this.handleError));
  }

  saveOrder(order: Order): Observable<any> {
    return this.http
      .post(
        `http://localhost:8080/api/user/order`,
        {
          order,
        },
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //a client-side or network error occured. Handle it accordingly.
      console.log('An error occured:', error.error);
      return throwError(() => error.error.message);
    } else {
      // the backend returned an unsuccesful response code.
      // the response body may contain clues as to what went wrong.
      console.error(
        'Backend returned code ${error.status}, body was:',
        error.error
      );
      return throwError(() => error.error.message);
    }
  }
}
