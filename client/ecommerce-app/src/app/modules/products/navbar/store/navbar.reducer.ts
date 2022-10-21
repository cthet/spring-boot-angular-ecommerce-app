import { createReducer, on } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import {
  loadBrandsByGenderId,
  loadApparelCategoriesBygenderId,
  setVideo,
  loadBrandsByGenderIdSuccess,
  loadBrandsByGenderIdFailure,
  loadApparelCategoriesBygenderIdFailure,
  loadApparelCategoriesBygenderIdSuccess,
} from './navbar.actions';

export interface NavbarState {
  video: string;
  brands: Brand[];
  apparelCategories: ApparelCategory[];  
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: NavbarState = {
  video: '',
  brands: [],
  apparelCategories: [],  
  error: null,
  status: 'pending',
};

export const navbarReducer = createReducer<NavbarState>(
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

  on(loadApparelCategoriesBygenderIdSuccess, (state, { apparelCategories }) => ({
    ...state,
    apparelCategories: apparelCategories,
    error: null,
    status: 'success',
  })),

  on(loadApparelCategoriesBygenderIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setVideo, (state, { video }) => ({
    ...state,
    video: video,
  })),


);
