import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { Brand } from 'src/app/products/models/brand';

export const setVideo = createAction('[Video Navbar] Set Video', props);

export const setVideoSuccess = createAction(
  '[Video Navbar] Set Video Success',
  props<{ video: string }>()
);

export const setImageSuccess = createAction(
  '[Image Navbar] Set Image Success',
  props<{ image: string }>()
);

export const removeVideo = createAction('[Video Navbar] Remove Video', props);

export const loadBrandsByGenderId = createAction(
  '[Brands Navbar] Load Brands',
  props
);

export const loadBrandsByGenderIdSuccess = createAction(
  '[Brands Navbar] Load Brands Success',
  props<{ brands: Brand[] }>()
);

export const loadBrandsByGenderIdFailure = createAction(
  '[Brands Navbar] Load Brands Failure',
  props<{ error: string }>()
);

export const loadApparelCategoriesBygenderId = createAction(
  '[ApparelCategories Navbar] Load ApparelCategories',
  props
);

export const loadApparelCategoriesBygenderIdSuccess = createAction(
  '[ApparelCategories Navbar] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesBygenderIdFailure = createAction(
  '[ApparelCategories Navbar] Load ApparelCategories Failure',
  props<{ error: string }>()
);

