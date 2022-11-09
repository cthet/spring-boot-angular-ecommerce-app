import { createAction, props } from '@ngrx/store';
import { Brand } from 'src/app/products/models/brand';

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

export const removeBrand = createAction(
  '[Brand Component] Remove Brand',
  props
);
