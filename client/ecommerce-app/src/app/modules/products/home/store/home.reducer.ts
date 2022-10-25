import { createReducer, on } from '@ngrx/store';
import { setHomeImages } from './home.actions';

export interface HomeState {
  headerImage: string;
  footerImage: string;
}

export const initialState: HomeState = {
  headerImage: '',
  footerImage: '',
};

export const homeReducer = createReducer<HomeState>(
  initialState,

  on(setHomeImages, (state, { headerImage, footerImage }) => ({
    ...state,
    headerImage: headerImage,
    footerImage: footerImage,
  }))
);
