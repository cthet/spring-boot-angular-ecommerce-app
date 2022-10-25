import { createAction, props } from "@ngrx/store";
import { Brand } from "src/app/modules/interfaces/models/brand";

export const loadBrandByBrandId = createAction(
  '[Brand] Load Brand',
  props<{ brandId: number }>()
);

export const loadBrandByBrandIdSuccess = createAction(
  '[Brand] Load Brand Success',
  props<{ brand: Brand }>()
);

export const loadBrandByBrandIdFailure = createAction(
  '[Brand] Load Brand Failure',
  props<{ error: string }>()
);

export const RemoveBrand = createAction('[Brand Component] Remove Brand', props);