import { Product } from './models/product';

export interface ResponseProducts {
  products: Product[];
  current_page: number;
  size: number;
  total_items: number;
  total_pages: number;
}
