import { createSelector } from "@ngrx/store";
import { selectHomeState } from "..";
import * as fromImages from '../reducers/images.reducer';


export const selectImagesState = createSelector(
  selectHomeState,
  (state) => state.images
);


export const selectheaderHomeImage = createSelector(
  selectImagesState,
  fromImages.getHeaderImage
);

export const selectfooterHomeImage = createSelector(
  selectImagesState,
  fromImages.getFooterImage
);
