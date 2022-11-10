import * as fromNavbar from './navbar.reducer';
import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const NavbarFeatureKey = 'navbar';

export interface NavbarState {
  [fromNavbar.NavbarFeatureKey]: fromNavbar.State;
}

export const selectNavbarState =
  createFeatureSelector<fromNavbar.State>(NavbarFeatureKey);

export const selectHomeVideo = createSelector(
  selectNavbarState,
  fromNavbar.getVideo
);

export const selectAllBrand = createSelector(
  selectNavbarState,
  fromNavbar.getBrands
);

export const selectAllApparelCategories = createSelector(
  selectNavbarState,
  fromNavbar.getCategories
);