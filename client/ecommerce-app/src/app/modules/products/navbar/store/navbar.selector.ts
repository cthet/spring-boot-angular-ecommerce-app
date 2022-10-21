import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { NavbarState } from './navbar.reducer';

export const selectNavbarState = (state: AppState) => state.navbar;

export const selectHomeVideo = createSelector(
  selectNavbarState,
  (state: NavbarState) => state.video
);

export const selectAllBrand = createSelector(
  selectNavbarState,
  (state: NavbarState) => state.brands
);

export const selectAllApparelCategories = createSelector(
  selectNavbarState,
  (state: NavbarState) => state.apparelCategories
);
