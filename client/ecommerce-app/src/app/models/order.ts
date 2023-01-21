import { Address } from "./Address";
import { CartItem } from "./CartItem";
export class OrderBuilder {
  orderTrackingNumber?: string;
  orderItems: CartItem[];
  shippingAddress: Address;
  totalPrice: number;
  totalQuantity: number;
  
  constructor(orderItems: CartItem[], shippingAddress: Address, totalPrice: number, totalQuantity: number) {
    this.orderItems = orderItems;
    this.shippingAddress = shippingAddress;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  }  

  private setOrderTrackingNumber(orderTrackingNumber: string){
    this.orderTrackingNumber = orderTrackingNumber;
    return this;
  }

  buildNewOrder(){
    return this.build();
  }

  buildExistingOrder(orderTrackingNumber: string){
    this.setOrderTrackingNumber(orderTrackingNumber);
    return this.build();
  }

  build() {
    return new Order(
      this.orderTrackingNumber,
      this.orderItems,
      this.shippingAddress,
      this.totalPrice,
      this.totalQuantity,
    );
  }  
}

export class Order {
  orderTrackingNumber?: string;
  orderItems: CartItem[];
  shippingAddress: Address;
  totalPrice: number;
  totalQuantity: number;

  constructor(orderTrackingNumber: string | undefined, orderItems: CartItem[], shippingAddress: Address, totalPrice: number, totalQuantity: number)
  {
    this.orderTrackingNumber = orderTrackingNumber;
    this.orderItems = orderItems;
    this.shippingAddress = shippingAddress;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  } 

}
