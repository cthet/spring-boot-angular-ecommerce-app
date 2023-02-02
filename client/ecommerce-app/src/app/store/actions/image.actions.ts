import { createAction, props } from "@ngrx/store";

export const setLoginImage = createAction('[Navbar PageComponent] Set Login Image');

export const setBrandImage = createAction('[Navbar PageComponent] Set Brand Image');

export const setApparelCategoryImage = createAction('[Navbar PageComponent] Set ApparelCategory Image');

export const setImage = createAction(
  '[Navbar Effects] Set Image',
  props<{ image: string }>()
);

export const removeImage = createAction('[Navbar Effects] Remove Image');