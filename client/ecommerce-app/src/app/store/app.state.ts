import { ProductsState } from '../modules/products/products-list/store/product-list.reducer';
import { HomeImageState } from '../modules/products/home/store/home.reducer';
import { NavbarState } from '../modules/products/navbar/store/navbar.reducer';
import { ProductsCategoryState } from '../modules/products/products-category/store/product-category.reducer';

export interface AppState {
  home: HomeImageState;
  navbar: NavbarState;
  categories: ProductsCategoryState;
  products: ProductsState;
 
}
