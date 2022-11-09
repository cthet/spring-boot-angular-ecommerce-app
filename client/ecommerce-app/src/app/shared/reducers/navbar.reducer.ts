import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { Brand } from 'src/app/products/models/brand';
import {
  loadBrandsByGenderId,
  loadApparelCategoriesBygenderId,
  setVideo,
  loadBrandsByGenderIdSuccess,
  loadBrandsByGenderIdFailure,
  loadApparelCategoriesBygenderIdFailure,
  loadApparelCategoriesBygenderIdSuccess,
  setVideoSuccess,
  removeVideo,
} from '../actions/navbar.actions';

export const NavbarFeatureKey = 'navbar';

export interface State {
  video: string;
  brands: Brand[];
  apparelCategories: ApparelCategory[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  video: '',
  brands: [],
  apparelCategories: [],
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(loadBrandsByGenderId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadBrandsByGenderIdSuccess, (state, { brands }) => ({
    ...state,
    brands: brands,
    error: null,
    status: 'success',
  })),

  on(loadBrandsByGenderIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(loadApparelCategoriesBygenderId, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(
    loadApparelCategoriesBygenderIdSuccess,
    (state, { apparelCategories }) => ({
      ...state,
      apparelCategories: apparelCategories,
      error: null,
      status: 'success',
    })
  ),

  on(loadApparelCategoriesBygenderIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setVideo, (state) => ({
    ...state,
  })),

  on(setVideoSuccess, (state, { video }) => ({
    ...state,
    video: video,
  })),

  on(removeVideo, (state) => ({
    ...state,
    video: '',
  }))
);

export const getVideo = (state: State) => state.video;

export const getBrands = (state: State) => state.brands;

export const getCategories = (state: State) => state.apparelCategories;