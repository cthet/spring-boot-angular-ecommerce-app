import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Address } from '../models/address';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  updateUser(user: User): Observable<any> {
    return this.http
      .post('http://localhost:8080/user/name', user)
      .pipe(catchError(this.handleError));
  }

  getUser(): Observable<User> {
    return this.http
      .get<User>(`http://localhost:8080/user`)
      .pipe(catchError(this.handleError));
  }

  updateAddress(address: Address): Observable<any> {
    return this.http
      .post('http://localhost:8080/user/address', address)
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
