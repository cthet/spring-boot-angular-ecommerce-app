import { Address } from './address';
import { Order } from './order';
import { OrderItem } from './orderItem';
import { User } from '../../profile/models/user';

export class OrderRequest {
  user!: User;
  shippingAddress!: Address;
  order!: Order;
  orderItems!: OrderItem[];
}
