import { createReducer, on } from '@ngrx/store';
import { setHomeImages } from './home.actions';

export interface HomeImageState {
  headerImage: string;
  footerImage: string;
}

export const initialState: HomeImageState = {
  headerImage: '',
  footerImage: '',
};

export const productsReducer = createReducer<HomeImageState>(
  initialState,

  on(setHomeImages, (state, { headerImage, footerImage }) => ({
    ...state,
    headerImage: headerImage,
    footerImage: footerImage,
  }))
);
