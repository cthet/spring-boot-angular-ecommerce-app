import { ApparelCategoriesState } from '../modules/products/apparel-categories/store/apparel-categories.reducer';
import { BrandState } from '../modules/products/brands/store/brands.reducer';
import { HomeImageState } from '../modules/products/home/store/home.reducer';

export interface AppState {
  homeImage: HomeImageState;
  brands: BrandState;
  apparelCategories: ApparelCategoriesState;
}
