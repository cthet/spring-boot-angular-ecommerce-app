import { createAction, props } from "@ngrx/store";
import { ApparelCategory } from "src/app/modules/interfaces/models/apparelCategory";

export const loadApparelCategoriesByGenderIdAndBrandId = createAction(
  '[ProductCategory Component] Load ApparelCategories',
  props<{ genderId: number; brandId: number }>()
);

export const loadApparelCategoriesByGenderIdAndBrandIdSuccess = createAction(
  '[ProductCategory Component] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesByGenderIdAndBrandIdFailure = createAction(
  '[ProductCategory Component] Load ApparelCategories Failure',
  props<{ error: string }>()
);