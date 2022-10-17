import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from 'src/app/modules/interfaces/models/apparelCategory';

export const loadApparelCategoriesBygenderId = createAction(
  '[ApparelCategory API] Load ApparelCategories By Gender',
  props<{ genderId: number }>()
);

export const loadApparelCategoriesBygenderIdAndBrandId = createAction(
  '[ApparelCategory API] Load ApparelCategories By Gender And Brand',
  props<{ genderId: number, brandId: number }>()
);

export const loadApparelCategoriesSuccess = createAction(
  '[ApparelCategory API] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesFailure = createAction(
  '[ApparelCategory API] Load ApparelCategories Failure',
  props<{ error: string }>()
);
