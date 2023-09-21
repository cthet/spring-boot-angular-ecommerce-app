import { Address } from "./Address";
import { CartItem } from "./CartItem";


interface OrderBuilderArgs {
  orderItems: CartItem[];
  shippingAddress: Address;
  totalPrice: number;
  totalQuantity: number;
}

export class OrderBuilder {
  id?: number;
  orderTrackingNumber?: string;
  date?: Date;
  orderItems: CartItem[];
  shippingAddress: Address;
  totalPrice: number;
  totalQuantity: number;
  
  constructor(args: OrderBuilderArgs) {
    this.orderItems = args.orderItems;
    this.shippingAddress = args.shippingAddress;
    this.totalPrice = args.totalPrice;
    this.totalQuantity = args.totalQuantity;
  }  

  private setOrderTrackingNumber(orderTrackingNumber: string) {
    this.orderTrackingNumber = orderTrackingNumber;
    return this;
  }

  buildNewOrder() {
    return this.build();
  }

  buildExistingOrder(orderTrackingNumber: string) {
    this.setOrderTrackingNumber(orderTrackingNumber);
    return this.build();
  }

  build() {
    return new Order(
      this.id,
      this.orderTrackingNumber,
      this.date,
      this.orderItems,
      this.shippingAddress,
      this.totalPrice,
      this.totalQuantity,
    );
  }  
}

export class Order {
  id?: number;
  orderTrackingNumber?: string;
  date?: Date;
  orderItems: CartItem[];
  shippingAddress: Address;
  totalPrice: number;
  totalQuantity: number;

  constructor(id: number | undefined, orderTrackingNumber: string | undefined, date: Date | undefined, orderItems: CartItem[], shippingAddress: Address, totalPrice: number, totalQuantity: number)
  {
    this.id = id;
    this.orderTrackingNumber = orderTrackingNumber;
    this.date = date;
    this.orderItems = orderItems;
    this.shippingAddress = shippingAddress;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  } 

}