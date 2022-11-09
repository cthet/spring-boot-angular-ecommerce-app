import * as fromNavbar from './navbar.reducer';
import * as fromHeader from '../../core/reducers/header.reducer';
import * as fromBrand from '../../products/reducers/brand.reducer';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const NavbarFeatureKey = 'navbar';

export interface NavbarState {
  [fromHeader.HeaderFeatureKey]: fromHeader.State;
  [fromNavbar.NavbarFeatureKey]: fromNavbar.State;
  [fromBrand.BrandFeatureKey]: fromBrand.State;
}

export function reducers(state: NavbarState | undefined, action: Action) {
  return combineReducers({
   [fromHeader.HeaderFeatureKey]: fromHeader.reducer,
    [fromNavbar.NavbarFeatureKey]: fromNavbar.reducer,
    [fromBrand.BrandFeatureKey]: fromBrand.reducer,
  })(state, action);
}

export const selectNavbarState =
  createFeatureSelector<NavbarState>(NavbarFeatureKey);

export const selectHomeVideo = createSelector(
  selectNavbarState,
  (state) => state[fromNavbar.NavbarFeatureKey].video
);

export const selectAllBrand = createSelector(
  selectNavbarState,
  (state) => state[fromNavbar.NavbarFeatureKey].brands
);

export const selectAllApparelCategories = createSelector(
  selectNavbarState,
  (state) => state[fromNavbar.NavbarFeatureKey].apparelCategories
);

export const selectHeaderState = createSelector(
  selectNavbarState,
  (state) => state.header
);

export const selectGender = createSelector(
  selectHeaderState,
  fromHeader.getGender
);

export const selectBrandState = createSelector(
  selectNavbarState,
  (state) => state.brand
);

export const selectBrand = createSelector(selectBrandState, fromBrand.getBrand);
