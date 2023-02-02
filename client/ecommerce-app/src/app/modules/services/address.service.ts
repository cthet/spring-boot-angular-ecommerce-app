import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Address } from '../../models/Address';
import { AddressResponse } from '../../models/AddressResponse';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  saveAddress(address: Address): Observable<Address> {
    return this.http
      .post<Address>(`http://localhost:8080/api/address`, address)
      .pipe(catchError(this.handleError));
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http
      .put<Address>(`http://localhost:8080/api/address/${address.id}`, address)
      .pipe(catchError(this.handleError));
  }

  fetchListAddress(): Observable<AddressResponse> {
    return this.http
      .get<AddressResponse>('http://localhost:8080/api/address')
      .pipe(catchError(this.handleError));
  }

  deleteAddress(id: number): Observable<number> {
    return this.http
      .delete<number>(`http://localhost:8080/api/address/${id}`)
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
