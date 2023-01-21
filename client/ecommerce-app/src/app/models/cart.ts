import { CartItem } from "./CartItem";


export class Cart {
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantity: number;

  constructor(cartItems: CartItem[], totalPrice: number, totalQuantity: number){
    this.cartItems = cartItems,
    this.totalPrice = totalPrice,
    this.totalQuantity = totalQuantity
  }
}
