import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {

    return this.http
      .post(
        'http://localhost:8080/api/auth/login',
        {
          email,
          password,
        },
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http
      .post<any>(
        'http://localhost:8080/api/auth/signup',
        {
          firstName,
          lastName,
          email,
          password,
        },
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  logout() {
    window.sessionStorage.clear();
    //return this.http.post<any>('http://localhost:8080/logout', customerId);
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
