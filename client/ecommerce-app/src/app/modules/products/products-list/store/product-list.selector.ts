import { createSelector } from '@ngrx/store';
import { HeaderState } from 'src/app/components/header/store/header.reducer';
import { selectHeaderState } from 'src/app/components/header/store/header.selector';
import { AppState } from 'src/app/store/app.state';
import { BrandState } from '../../brand/store/brand.reducer';
import { selectBrandState } from '../../brand/store/brand.selector';
import { ProductsCategoryState } from '../../products-category/store/product-category.reducer';
import { selectProductsCategoryState } from '../../products-category/store/product-category.selector';
import { ProductsState } from './product-list.reducer';

export const selectProductsState = (state: AppState) => state.products;


export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectGenderAndBrand = createSelector(
  selectHeaderState,
  selectBrandState,
  (headerState: HeaderState, brandState: BrandState) => ({
    gender: headerState.gender,
    brand: brandState.brand,
  })
);

export const selectGenderAndBrandAndCategory = createSelector(
  selectHeaderState,
  selectBrandState,
  selectProductsCategoryState,
  (headerState: HeaderState, brandState: BrandState, categoryState: ProductsCategoryState) => ({
    gender: headerState.gender,
    brand: brandState.brand,
    category: categoryState.apparelCategories
  })
);

export const selectGenderAndBrandAndCategoryAndSort = createSelector(
  selectHeaderState,
  selectBrandState,
  selectProductsCategoryState,
  selectProductsState,
  (headerState: HeaderState, brandState: BrandState, categoryState: ProductsCategoryState, productsState: ProductsState) => ({
    gender: headerState.gender,
    brand: brandState.brand,
    category: categoryState.apparelCategories,
    sort: productsState.sort
  })
);