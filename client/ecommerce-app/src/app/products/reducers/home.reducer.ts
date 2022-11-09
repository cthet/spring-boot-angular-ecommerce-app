import { createReducer, on } from '@ngrx/store';
import { setHomeImages } from '../actions/home.actions';

export const HomeFeatureKey = 'home';

export interface State {
  headerImage: string;
  footerImage: string;
}

export const initialState: State = {
  headerImage: '',
  footerImage: '',
};

export const reducer = createReducer<State>(
  initialState,

  on(setHomeImages, (state, { headerImage, footerImage }) => ({
    ...state,
    headerImage: headerImage,
    footerImage: footerImage,
  }))
);

export const getHeaderImage = (state: State) => state.headerImage;

export const getFooterImage = (state: State) => state.footerImage;