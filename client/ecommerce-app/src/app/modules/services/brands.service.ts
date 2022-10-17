import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseBrands } from '../interfaces/responseBrands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) {} 


    fetchBrandsByGenderId(genderId: number): Observable<ResponseBrands> {
    return this.http.get<ResponseBrands>(
        `http://localhost:8080/api/category/brands?genderId=${genderId}`,
      );
  }
}
