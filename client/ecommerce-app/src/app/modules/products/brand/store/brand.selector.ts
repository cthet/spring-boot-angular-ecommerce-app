import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { BrandState } from './brand.reducer';

export const selectBrandState = (state: AppState) => state.brand;

export const selectBrand = createSelector(
  selectBrandState,
  (state: BrandState) => state.brand
);
