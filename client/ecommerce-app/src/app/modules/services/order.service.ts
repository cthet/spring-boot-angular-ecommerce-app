import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrdersResponse } from 'src/app/models/OrdersResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}
  
  saveOrder(order: Order): Observable<Order> {
    return this.http
      .post<Order>(
        `http://localhost:8080/api/order/register`, order)
      .pipe(catchError(this.handleError));
  }

  fetchOrders(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(
      `http://localhost:8080/api/order/fetch`
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
