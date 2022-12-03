import { createAction, props } from "@ngrx/store";
import { Credentials } from "../../interfaces/User";

export const login = createAction(
  '[Login Page] Login User',
  props<{ credentials: Credentials }>()
);
