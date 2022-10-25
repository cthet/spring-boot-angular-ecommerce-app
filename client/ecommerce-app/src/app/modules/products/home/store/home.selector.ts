import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { HomeState } from './home.reducer';

export const selectHeaderImage = (state: AppState) => state.home;

export const selectheaderHomeImage = createSelector(
  selectHeaderImage,
  (state: HomeState) => state.headerImage
);

export const selectFooterImage = (state: AppState) => state.home;

export const selectfooterHomeImage = createSelector(
  selectFooterImage,
  (state: HomeState) => state.footerImage
);
