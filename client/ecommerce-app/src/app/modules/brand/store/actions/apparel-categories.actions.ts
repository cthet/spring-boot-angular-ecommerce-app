import { createAction, props } from '@ngrx/store';
import { ApparelCategory } from '../../../../models/ApparelCategory';

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
  '[Products Categories Page] Check Apparel Category',
  props<{ apparelCategoryId: number }>()
);

export const uncheckApparelCategory = createAction(
  '[Products Categories Page] Uncheck Apparel Category',
  props<{ apparelCategoryId: number }>()
);

export const setApparelCategories = createAction(
  '[Products Categories Page] Set Apparel Categories',
  props<{ apparelCategories: ApparelCategory[] }>()
);

