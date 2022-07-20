import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Address } from '../models/address';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  user = new Subject<User>;
  address = new Subject<Address>;

  constructor() {}
}
