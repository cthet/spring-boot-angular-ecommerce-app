import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from '../models/Order';
import { OrdersResponse } from '../models/OrdersResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  saveOrder(order: Order): Observable<Order> {
    return this.http
      .post<Order>(
        `${this.apiUrl}/order/register`, order)
      .pipe(catchError(this.handleError));
  }

  fetchOrders(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(
      `${this.apiUrl}/order/user`
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
