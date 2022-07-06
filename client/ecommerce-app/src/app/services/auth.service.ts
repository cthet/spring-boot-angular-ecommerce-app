import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isConnected = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(
        'http://localhost:8080/login',
        {
          email,
          password,
        },
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  signup(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        'http://localhost:8080/signup',
        {
          email,
          password,
        },
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  logout(customerId: number) {
    return this.http.post<any>('http://localhost:8080/logout', customerId);
  }

  refreshToken(token: string) {
    return this.http.post(
      'http://localhost:8080/refreshtoken',
      {
        refreshToken: token,
      },
      httpOptions
    );
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
