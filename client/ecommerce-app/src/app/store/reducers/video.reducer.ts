import { createReducer, on } from '@ngrx/store';
import { removeVideo, setHomeVideo, setVideo } from '../actions/video.actions';


export const VideoFeatureKey = 'video';

export interface State {
  video: string | null;
}

export const initialState: State = {
  video: null,
};

export const reducer = createReducer<State>(
  initialState,

  on(setHomeVideo, (state) => ({
    ...state,
  })),

  on(setVideo, (state, { video }) => ({
    ...state,
    video: video,
  })),

  on(removeVideo, (state) => ({
    ...state,
    video: null,
  })),

);

export const getVideo = (state: State) => state.video;

