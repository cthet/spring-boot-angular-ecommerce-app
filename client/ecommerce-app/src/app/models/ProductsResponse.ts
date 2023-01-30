import { Product } from "./Product";

export interface ProductsResponse {
  products: Product[];
  current_page: number;
  size: number;
  total_items: number;
  total_pages: number;
}
