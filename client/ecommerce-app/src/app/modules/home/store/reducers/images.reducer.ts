import { createReducer, on } from '@ngrx/store';
import { setGenderImages } from '../actions/images.actions';

export const ImageFeatureKey = 'images';

export interface State {
  headerImage: string | null;
  footerImage: string | null;
}

export const initialState: State = {
  headerImage: null,
  footerImage: null,
};

export const reducer = createReducer<State>(
  initialState,
 
on(setGenderImages, (state, { headerImage, footerImage }) => ({
    ...state,
    headerImage: headerImage,
    footerImage: footerImage,
  })),

);

export const getHeaderImage = (state: State) => state.headerImage;

export const getFooterImage = (state: State) => state.footerImage;