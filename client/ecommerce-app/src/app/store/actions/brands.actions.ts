import { createAction, props } from "@ngrx/store";
import { Brand } from "src/app/models/Brand";

export const loadBrands = createAction('[Navbar PageComponent] Load Brands');

export const loadBrandsSuccess = createAction(
  '[Navbar Effects] Load Brands Success',
  props<{ brands: Brand[] }>()
);

export const loadBrandsFailure = createAction(
  '[Navbar Effects] Load Brands Failure',
  props<{ error: string }>()
);

export const browserReload = createAction(
  '[App Component] Browser Reload Brand',
  props<{ brand: Brand }>()
);


export const setBrand = createAction('[Navbar Page] Set Brand', props<{ brand: Brand }>());

export const removeBrand = createAction('[Navbar Page] Remove Brand');