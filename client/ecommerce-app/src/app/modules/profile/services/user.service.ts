import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Profile } from '../models/Profile';
import { OrdersResponse } from 'src/app/models/OrdersResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<Profile> {
    return this.http
      .get<Profile>(`${this.apiUrl}/user/profile`)
      .pipe(catchError(this.handleError));
  }

  getUserOrders(): Observable<OrdersResponse> {
    return this.http
      .get<OrdersResponse>(`${this.apiUrl}/order/user`)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //a client-side or network error occured. Handle it accordingly.
      console.log('An error occured:', error.error);
      return throwError(() => new Error(error.error.message));
    } else {
      // the backend returned an unsuccesful response code.
      // the response body may contain clues as to what went wrong.
      console.error(
        'Backend returned code ${error.status}, body was:',
        error.error
      );
      return throwError(() => new Error(error.error.message));
    }
  }


}
