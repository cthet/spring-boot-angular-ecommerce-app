import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { responseAddress } from 'src/app/models/responseAddress';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) { }


  saveAddress(address: Address): Observable<Address> {
    return this.http
      .post<Address>(`http://localhost:8080/api/user/address`, address)
      .pipe(catchError(this.handleError));
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http
      .put<Address>(`http://localhost:8080/api/user/address/${address.id}`, address)
      .pipe(catchError(this.handleError));
  }

  fetchListAddress(): Observable<responseAddress> {
    return this.http
      .get<responseAddress>('http://localhost:8080/api/user/address')
      .pipe(catchError(this.handleError));
  }

  deleteAddress(id: number): Observable<number> {
    return this.http
      .delete<number>(`http://localhost:8080/api/user/address/${id}`)
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
