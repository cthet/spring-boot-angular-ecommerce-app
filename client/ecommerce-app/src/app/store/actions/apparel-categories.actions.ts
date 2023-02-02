import { createAction, props } from "@ngrx/store";
import { ApparelCategory } from "../../models/ApparelCategory";

export const loadApparelCategories = createAction('[Navbar PageComponent] Load ApparelCategories');

export const loadApparelCategoriesSuccess = createAction(
  '[Navbar Effects] Load ApparelCategories Success',
  props<{ apparelCategories: ApparelCategory[] }>()
);

export const loadApparelCategoriesFailure = createAction(
  '[Navbar Effects] Load ApparelCategories Failure',
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

export const setApparelCategory = createAction('[Navbar Page] Set ApparelCategory', props<{ apparelCategory: ApparelCategory }>());

export const removeApparelCategory = createAction('[Navbar Page] Remove ApparelCategory');


export const browserReload = createAction(
  '[App Component] Browser Reload ApparelCategory',
  props<{ apparelCategory: ApparelCategory }>()
);
