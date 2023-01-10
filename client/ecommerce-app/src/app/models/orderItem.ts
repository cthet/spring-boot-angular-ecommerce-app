import { Product } from "src/app/models/product";


export class OrderItem {
  product!: Product;
  quantity!: number;
  amount!: number;

  constructor(product: Product, quantity: number, amount: number) {
    this.product = product;
    this.quantity = quantity;
    this.amount = amount;

  }
}
