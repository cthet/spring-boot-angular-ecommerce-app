import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PaymentInfo } from 'src/app/models/Payment-info';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {

  constructor(private http: HttpClient) {}

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.http
      .post<PaymentInfo>(
        `http://localhost:8080/api/checkout/payment-intent`,
        paymentInfo
      )
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
