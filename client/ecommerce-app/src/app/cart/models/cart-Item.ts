import { Product } from '../../products/models/product';

export class CartItem {
  item!: Product;
  quantity!: number;
}
