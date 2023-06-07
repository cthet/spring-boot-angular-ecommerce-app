import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Credentials } from '../interfaces/Credentials';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {

    return this.http
      .post(
        `${this.apiUrl}/auth/signin`,
        credentials,
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  signup(
    civility: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/auth/signup`,
        {
          civility,
          firstName,
          lastName,
          email,
          password,
        },
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //a client-side or network error occured. Handle it accordingly.
      console.log('An error occured:', error.error);
      return throwError(() => new Error(error.message));
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
