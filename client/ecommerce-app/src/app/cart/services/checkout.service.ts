import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Address } from '../models/address';
import { Country } from '../models/country';
import { OrderRequest } from '../models/orderRequest';
import { PaymentInfo } from '../models/payment-info';
import { User } from '../../profile/models/user';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  user$: BehaviorSubject<User> = new BehaviorSubject<User>({
    firstName: '',
    lastName: '',
  });
  address$: BehaviorSubject<Address> = new BehaviorSubject<Address>({
    id: 0,
    country: '',
    postCode: 0,
    city: '',
    street: '',
  });

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http
      .get<Country[]>(`http://localhost:8080/countries/all`)
      .pipe(catchError(this.handleError));
  }

  saveOrder(order: OrderRequest): Observable<any> {
    return this.http
      .post<string>(`http://localhost:8080/order/register`, order)
      .pipe(catchError(this.handleError));
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.http
      .post<PaymentInfo>(
        `http://localhost:8080/order/payment-intent`,
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
