import { createAction, props } from "@ngrx/store";
import { ApparelCategory } from "src/app/modules/interfaces/models/apparelCategory";

export const loadApparelCategories = createAction(
  '[ProductCategory] Load ApparelCategories',
  props
);

export const loadApparelCategoriesSuccess = createAction(
  '[ProductCategory] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesFailure = createAction(
  '[ProductCategory] Load ApparelCategories Failure',
  props<{ error: string }>()
);

export const loadApparelCategoriesByBrandId = createAction(
  '[ProductCategory] Load ApparelCategories By Brand',
  props<{ brandId: number }>()
);

export const loadApparelCategoriesByBrandIdSuccess = createAction(
  '[ProductCategory] Load ApparelCategories By Brand Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesByBrandIdFailure = createAction(
  '[ProductCategory] Load ApparelCategories By Brand Failure',
  props<{ error: string }>()
);

export const checkApparelCategory = createAction(
  '[ProductCategory] Check ApparelCategory',
  props<{ apparelCategoryId: number }>()
)

export const uncheckApparelCategory = createAction(
  '[ProductCategory] Uncheck ApparelCategory',
  props<{ apparelCategoryId: number }>()
)


