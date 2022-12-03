import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartItem } from '../../../models/cart-Item';

@Component({
  selector: 'app-cart-details',
  template: `
  <div class="container">
    <div class="col-sm-12 mx-auto pt-4 pb-4">
      <mat-card class="pb-4">
        <mat-card-title class="mb-4">Votre Panier</mat-card-title>
        <mat-card-content *ngIf="cart!.totalQuantity > 0">
          <table class="table">
            <thead class="medium-important large">
              <tr class="col-name">
                <td scope="col-sm-6">Product</td>
                <td scope="col-sm-4">Unit Price</td>
                <td scope="col-sm-4">Quantity</td>
              </tr>
            </thead>
            <tbody *ngFor="let cartItem of cart!.cartItems; index as i">
              <tr *ngIf="cartItem">
                <th scope="row col-sm-2">{{ i + 1 }}</th>
                <td class="fs-6 col-sm-6">
                  {{ cartItem.item.product_name }}
                  <div class="card col-sm-4 mt-4 mb-4">
                    <img class="image" src="{{ cartItem.item.image_url }}" />
                  </div>
                </td>
                <td class="fs-6 important">
                  {{ cartItem.item.unit_price | currency: 'EUR' }}
                </td>
                <td class="fs-6 important">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="col-sm-5">
                        <button
                          mat-stroked-button
                          color="warn"
                          (click)="removeOne.emit(cartItem)"
                        >
                          -
                        </button>
                      </div>
                      <div class="col-sm-2 justify-content-center">
                        {{ cartItem.quantity }}
                      </div>
                      <div class="col-sm-5">
                        <button
                          mat-raised-button
                          color="warn"
                          (click)="addOne.emit(cartItem)"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div *ngIf="cart!.totalQuantity != 0">
            <div class="d-flex justify-content-end large pt-2">
              <span
                >Total Items:
                <span class="important">{{ cart!.totalQuantity }}</span></span
              >
            </div>
            <div class="d-flex justify-content-end large pt-2">
              <span
                >Total Price:
                <span class="important">{{
                  cart!.totalPrice | currency: 'EUR'
                }}</span></span
              >
            </div>
            <a
              class="checkout d-flex justify-content-end font-weight-bold pt-4"
              routerLink="/checkout"
            >
              <button
                mat-raised-button
                color="warn"
                class="text-uppercase font-weight-bold"
              >
                Proceed to checkout
              </button>
            </a>
          </div>
        </mat-card-content>
        <mat-card-content *ngIf="cart!.totalQuantity === 0" class="fs-6">
          Your shopping list is empty.
        </mat-card-content>
      </mat-card>
    </div>
  </div> `,
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  @Input() cart!: Cart | null;

  @Output() addOne = new EventEmitter<CartItem>();
  @Output() removeOne = new EventEmitter<CartItem>();

}
