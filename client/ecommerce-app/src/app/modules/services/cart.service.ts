import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cart } from 'src/app/models/Cart';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  fetchCart(): Observable<Cart> {
    return this.http.get<Cart>(
      `http://localhost:8080/api/cart/user`
    ).pipe(catchError(this.handleError));
  }


  saveCart(cart: Cart): Observable<any> {
    return this.http
      .post(
        `http://localhost:8080/api/cart/user`, cart)
      .pipe(catchError(this.handleError));
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


  // addToCart(product: Product): void {
  //   if (product != null && product.units_in_stock > 0) {
  //     let productPresentInCart: CartItem | undefined = undefined;

  //     productPresentInCart = this.cartItems.find(
  //       (CartItem: CartItem) => CartItem.item.id == product.id
  //     );

  //     if (productPresentInCart != undefined) {
  //       productPresentInCart.quantity++;
  //     } else {
  //       this.cartItems.push({ item: product, quantity: 1 });
  //     }
  //     this.updateCartStatus();
  //   }
  // }

  // removeFromCart(product: Product): void {
  //   if (product != null) {
  //     let productPresentInCart: CartItem | undefined;
  //     productPresentInCart = this.cartItems.find(
  //       (CartItem: CartItem) =>
  //         CartItem.item.id == product.id && CartItem.quantity > 0
  //     );

  //     if (productPresentInCart != null) {
  //       this.cartItems
  //         .filter(
  //           (currentvalue: CartItem) => currentvalue == productPresentInCart
  //         )
  //         .map((currentValue: CartItem) => currentValue.quantity--);

  //       this.cartItems = this.cartItems.filter(
  //         (currentvalue: CartItem) => currentvalue.quantity != 0
  //       );
  //     }

  //     this.updateCartStatus();
  //   }
  //   return;
  // }

  // updateCartStatus(): void {
  //   this.saveCart();
  //   this.totalPrice = 0;
  //   this.totalQuantity = 0;

  //   for (let cartItem of this.cartItems) {
  //     this.totalPrice += cartItem.quantity * cartItem.item.unit_price;
  //     this.totalQuantity += cartItem.quantity;
  //   }
  //   this.totalPrice$.next(this.totalPrice);
  //   this.totalQuantity$.next(this.totalQuantity);
  // }



