import * as fromHome from '../../products/reducers/home.reducer';
import * as fromCore from '../../reducers/index';
import * as fromBrand from '../../products/reducers/brand.reducer';
import * as fromCategories from '../../products/reducers/product-category.reducer';
import * as fromProducts from '../../products/reducers/product-list.reducer';
import * as fromProduct from '../../products/reducers/product.reducer';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const ProductsFeatureKey = 'products';

export interface ProductsState {
  [fromHome.HomeFeatureKey]: fromHome.State;
  [fromBrand.BrandFeatureKey]: fromBrand.State;
  [fromCategories.CategoriesFeatureKey]: fromCategories.State;
  [fromProducts.ProductsFeatureKey]: fromProducts.State;
  [fromProduct.ProductFeatureKey]: fromProduct.State;
}

export function reducers(state: ProductsState | undefined, action: Action) {
  return combineReducers({
    [fromHome.HomeFeatureKey]: fromHome.reducer,
    [fromBrand.BrandFeatureKey]: fromBrand.reducer,
    [fromCategories.CategoriesFeatureKey]: fromCategories.reducer,
    [fromProducts.ProductsFeatureKey]: fromProducts.reducer,
    [fromProduct.ProductFeatureKey]: fromProduct.reducer,
  })(state, action);
}

export const selectProductsState =
  createFeatureSelector<ProductsState>(ProductsFeatureKey);

export const selectHomeState = createSelector(
  selectProductsState,
  (state) => state.home
);

export const selectheaderHomeImage = createSelector(
  selectHomeState,
  (state) => state.headerImage
);

export const selectfooterHomeImage = createSelector(
  selectHomeState,
  (state) => state.footerImage
);

export const selectBrandState = createSelector(
  selectProductsState,
  (state) => state.brand
);

export const selectBrand = createSelector(
  selectBrandState,
  (state) => state.brand
);

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.products.products
);

export const selectApparelCategoriesState = createSelector(
  selectProductsState,
  (state) => state.categories
);

export const selectApparelCategories = createSelector(
  selectApparelCategoriesState,
  (state) => state.apparelCategories
);

export const selectProductState = createSelector(
  selectProductsState,
  (state) => state.product
);

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.product
);


export const selectBrandAndCategory = createSelector(
  selectBrandState,
  selectApparelCategoriesState,
  (brandState, apparelCategoriesState) => ({
    brand: brandState.brand,
    apparelCategories: apparelCategoriesState.apparelCategories,
  })
);

export const selectBrandAndCategoryAndSort = createSelector(
  selectBrandAndCategory,
  selectProductsState,
  (state, productsState) => ({
    brand: state.brand,
    category: state.apparelCategories,
    sort: productsState.products.sort,
  })
);
