import { createAction, props } from "@ngrx/store";
import { ApparelCategory } from "../../models/apparelCategory";

export const loadApparelCategories = createAction('[Navbar PageComponent] Load ApparelCategories');

export const loadApparelCategoriesSuccess = createAction(
  '[Navbar Effects] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesFailure = createAction(
  '[Navbar Effects] Load ApparelCategories Failure',
  props<{ error: string }>()
);
