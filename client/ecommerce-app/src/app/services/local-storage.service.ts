import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { Cart } from '../models/cart';
import { Gender } from '../models/gender';
import { User } from '../modules/auth/interfaces/User';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CART = 'cart';
const GENDER_KEY = 'gender';
const BRAND_KEY = 'brand';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  ///////////////////////////////////////////////////////////

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, 'Bearer ' + token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public logout() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.removeItem(CART);
  }

  ////////////////////////////////////////////////////////////////////
  public saveCart(cart: Cart) {
    window.localStorage.setItem(CART, JSON.stringify(cart));
  }

  getCart() {
    let cart = window.localStorage.getItem(CART);

    if (cart != null) {
      return cart = JSON.parse(cart);
    }
  }

  /////////////////////////////////////////////////////////////////////

  public saveGender(gender: Gender): void {
    window.localStorage.removeItem(GENDER_KEY);
    window.localStorage.setItem(GENDER_KEY, JSON.stringify(gender));
  }

  public getGender(): Gender | null {
    const gender = window.localStorage.getItem(GENDER_KEY);
    if (gender) {
      return JSON.parse(gender);
    }
    return null;
  }

  /////////////////////////////////////////////////////////////////////

  public saveBrand(brand: Brand): void {
    window.localStorage.removeItem(BRAND_KEY);
    window.localStorage.setItem(BRAND_KEY, JSON.stringify(brand));
  }

  public getBrand(): Brand | null {
    const brand = window.localStorage.getItem(BRAND_KEY);
    if (brand) {
      return JSON.parse(brand);
    }
    return null;
  }


}
