import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromVideo from "../reducers/video.reducer";

export const selectVideoState = createFeatureSelector<fromVideo.State>(fromVideo.VideoFeatureKey);


export const selectVideo = createSelector(
  selectVideoState,
  fromVideo.getVideo
);

