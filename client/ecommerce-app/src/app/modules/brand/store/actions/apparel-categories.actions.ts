import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from '../../../../models/apparelCategory';

export const loadApparelCategoriesByBrand = createAction('[Brand Page] Load Categories By Brand');

export const loadApparelCategoriesByBrandSuccess = createAction(
  '[Brand Effects] Load ApparelCategories By Brand Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesByBrandFailure = createAction(
  '[Brand Effects] Load ApparelCategories By Brand Failure',
  props<{ error: string }>()
);

export const checkApparelCategory = createAction(
  '[Products Categories Page] Check Category',
  props<{ apparelCategoryId: number }>()
);

export const uncheckApparelCategory = createAction(
  '[Products Categories Page] Uncheck Category',
  props<{ apparelCategoryId: number }>()
);

export const setApparelCategories = createAction(
  '[Products Categories Page] Set Categories',
  props<{ apparelCategories: ApparelCategory[] }>()
);

