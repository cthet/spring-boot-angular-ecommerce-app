import { createAction, props } from "@ngrx/store";
import { Brand } from "../../../../models/Brand";

export const loadBrandCategoriesByApparelCategory = createAction('[ApparelCategory Page Component] Load Brand Categories By ApparelCategory');

export const loadBrandCategoriesByApparelCategorySuccess = createAction(
  '[ApparelCategory Effects] Load Brand Categories By ApparelCategory Success',
  props<{ brands: Brand[] }>()
);

export const loadBrandCategoriesByApparelCategoryFailure = createAction(
  '[ApparelCategory Effects] Load Brand Categories By ApparelCategory Failure',
  props<{ error: string }>()
);


export const checkBrandCategory = createAction(
  '[Products Categories Page] Check Brand Category',
  props<{ brandCategoryId: number }>()
);

export const uncheckBrandCategory = createAction(
  '[Products Categories Page] Uncheck Brand Category',
  props<{ brandCategoryId: number }>()
);


