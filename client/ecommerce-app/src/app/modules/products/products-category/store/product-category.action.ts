import { createAction, props } from "@ngrx/store";
import { ApparelCategory } from "src/app/modules/interfaces/models/apparelCategory";

export const loadApparelCategoriesByBrandId = createAction(
  '[ProductCategory] Load ApparelCategories',
  props<{ brandId: number }>()
);

export const loadApparelCategoriesByBrandIdSuccess = createAction(
  '[ProductCategory] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesByBrandIdFailure = createAction(
  '[ProductCategory] Load ApparelCategories Failure',
  props<{ error: string }>()
);