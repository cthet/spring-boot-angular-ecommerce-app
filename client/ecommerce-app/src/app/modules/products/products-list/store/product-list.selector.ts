import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ProductsState } from './product-list.reducer';

export const selectProductsState = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);
