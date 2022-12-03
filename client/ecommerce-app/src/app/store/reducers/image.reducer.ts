import { createReducer, on } from '@ngrx/store';
import { setLoginImage, setImage, removeImage } from '../actions/image.actions';


export const ImageFeatureKey = 'image';

export interface State {
  image: string | null;
}

export const initialState: State = {
  image: null,
};

export const reducer = createReducer<State>(
  initialState,

  on(setLoginImage, (state) => ({
    ...state,
  })),

  on(setImage, (state, { image }) => ({
    ...state,
    image: image,
  })),

  on(removeImage, (state) => ({
    ...state,
    image: null,
  }))
);


export const getImage = (state: State) => state.image;
