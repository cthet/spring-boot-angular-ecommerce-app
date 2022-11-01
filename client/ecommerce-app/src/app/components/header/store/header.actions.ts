import { createAction, props } from "@ngrx/store";
import { Gender } from "src/app/modules/interfaces/models/gender";

export const setGender = createAction(
  '[Header] Set Gender',
  props<{ gender: Gender }>()
);