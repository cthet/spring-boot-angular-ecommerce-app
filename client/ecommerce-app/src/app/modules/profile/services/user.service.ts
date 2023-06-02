import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PersonalInfo } from '../models/PersonalInfo';
import { Profile } from '../models/Profile';
import { Order } from 'src/app/models/Order';
import { OrdersResponse } from 'src/app/models/OrdersResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<Profile> {
    return this.http
      .get<Profile>(`http://localhost:8080/api/user/profile`)
      .pipe(catchError(this.handleError));
  }

  getUserOrders(): Observable<OrdersResponse> {
    return this.http
      .get<OrdersResponse>(`http://localhost:8080/api/order/user`)
      .pipe(catchError(this.handleError));
  }

  // updatePersonalInfo(personalInfo: PersonalInfo): Observable<any> {
  //   return this.http
  //     .post('http://localhost:8080/api/user/info', personalInfo)
  //     .pipe(catchError(this.handleError));
  // }

  // updateEmail(email: string): Observable<any> {
  //   return this.http
  //     .post('http://localhost:8080/api/user/email', email)
  //     .pipe(catchError(this.handleError));
  // }

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
