import { Address } from "./address";
import { OrderItem } from "./orderItem";

export class Order {
  orderItems!: OrderItem[];
  address!: Address;
  totalPrice!: number;
  totalQuantity!: number;
}
