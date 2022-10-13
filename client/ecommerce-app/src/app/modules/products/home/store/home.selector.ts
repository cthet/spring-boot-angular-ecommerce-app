import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { HomeImageState } from './home.reducer';

export const selectHeaderImage = (state: AppState) => state.homeImage;

export const selectheaderHomeImage = createSelector(
  selectHeaderImage,
  (state: HomeImageState) => state.headerImage
);

export const selectFooterImage = (state: AppState) => state.homeImage;

export const selectfooterHomeImage = createSelector(
  selectFooterImage,
  (state: HomeImageState) => state.footerImage
);
