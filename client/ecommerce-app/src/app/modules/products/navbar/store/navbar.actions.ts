import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import { Brand } from 'src/app/modules/interfaces/models/brand';

export const setVideo = createAction(
  '[Video Navbar component] Set Video',
  props<{ video: string }>()
);

export const loadBrandsByGenderId = createAction('[Brands Navbar component] Load Brands', props<{ genderId: number }>());

export const loadBrandsByGenderIdSuccess = createAction(
  '[Brands Navbar component] Load Brands Success',
  props<{ brands: Brand[] }>()
);

export const loadBrandsByGenderIdFailure = createAction(
  '[Brands Navbar component] Load Brands Failure',
  props<{ error: string }>()
);

export const loadApparelCategoriesBygenderId = createAction(
  '[ApparelCategories Navbar component] Load ApparelCategories',
  props<{ genderId: number }>()
);

export const loadApparelCategoriesBygenderIdSuccess = createAction(
  '[ApparelCategories Navbar component] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesBygenderIdFailure = createAction(
  '[ApparelCategories Navbar component] Load ApparelCategories Failure',
  props<{ error: string }>()
);

