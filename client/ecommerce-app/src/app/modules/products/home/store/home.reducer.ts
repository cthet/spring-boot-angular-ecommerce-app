import { createReducer, on } from '@ngrx/store';
import { loadHomeImages } from './home.actions';

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

  on(loadHomeImages, (state, { headerImage, footerImage }) => ({
    ...state,
    headerImage: headerImage,
    footerImage: footerImage,
  }))
);
