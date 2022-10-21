import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';
import { Brand } from 'src/app/modules/interfaces/models/brand';

export const loadBrandByGenderIdAndBrandId = createAction(
  '[Products Component] Load Brand',
  props<{ genderId: number; brandId: number }>()
);

export const loadBrandByGenderIdAndBrandIdSuccess = createAction(
  '[Products Component] Load Brand Success',
  props<{ brand: Brand}>()
);

export const loadBrandByGenderIdAndBrandIdFailure = createAction(
  '[Products Component] Load Brand Failure',
  props<{ error: string }>()
);

export const RemoveBrand = createAction(
  '[Products Image] Remove Brand',
  props
);

export const loadApparelCategoriesByGenderIdAndBrandId = createAction(
  '[Products Component] Load ApparelCategories',
  props<{ genderId: number; brandId: number }>()
);

export const loadApparelCategoriesByGenderIdAndBrandIdSuccess = createAction(
  '[Products Component] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesByGenderIdAndBrandIdFailure = createAction(
  '[Products Component] Load ApparelCategories Failure',
  props<{ error: string }>()
);
