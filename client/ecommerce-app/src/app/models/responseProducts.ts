import { Product } from "./product";


export interface responseProducts {
  products: Product[];
  current_page: number;
  size: number;
  total_items: number;
  total_pages: number;
}
