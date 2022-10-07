import { Product } from './product';

export class OrderItem {
  quantity!: number;
  amount!: number;
  product!: Product;

  constructor(quantity: number, amount: number, product: Product) {
    this.quantity = quantity;
    this.amount = amount;
    this.product = product;
  }
}
