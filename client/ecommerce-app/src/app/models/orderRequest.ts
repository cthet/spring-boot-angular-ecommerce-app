import { Address } from './address';
import { Order } from './order';
import { OrderItem } from './orderItem';

export class OrderRequest {
  shippingAddress!: Address;
  order!: Order;
  orderItems!: OrderItem[];
}
