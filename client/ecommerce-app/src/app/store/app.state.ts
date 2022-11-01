import { ProductsState } from '../modules/products/products-list/store/product-list.reducer';
import { HomeState } from '../modules/products/home/store/home.reducer';
import { ProductsCategoryState } from '../modules/products/products-category/store/product-category.reducer';
import { NavbarState } from '../modules/shared/navbar/store/navbar.reducer';
import { HeaderState } from '../components/header/store/header.reducer';
import { BrandState } from '../modules/products/brand/store/brand.reducer';

export interface AppState {
  header: HeaderState;
  navbar: NavbarState;
  home: HomeState;
  brand: BrandState;
  categories: ProductsCategoryState;
  products: ProductsState;
}
