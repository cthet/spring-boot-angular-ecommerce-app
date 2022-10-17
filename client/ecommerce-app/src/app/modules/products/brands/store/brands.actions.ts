import { createAction, props } from '@ngrx/store';
import { Brand } from 'src/app/modules/interfaces/models/brand';

export const loadBrands = createAction('[Brands API] Load Brands', props<{ id: number }>());

export const loadBrandsSuccess = createAction(
  '[Brands API] Load Brands Success',
  props<{ brands: Brand[] }>()
);

export const loadBrandsFailure = createAction(
  '[Brands API] Load Brands Failure',
  props<{ error: string }>()
);
