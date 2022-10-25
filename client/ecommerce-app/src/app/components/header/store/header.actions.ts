import { createAction, props } from "@ngrx/store";

export const setGender = createAction(
  '[Header] Set Gender',
  props<{ genderId: number }>()
);