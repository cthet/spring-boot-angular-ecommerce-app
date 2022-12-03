import { createAction, props } from "@ngrx/store";
import { User } from "../../modules/auth/interfaces/User";

export const browserReload = createAction(
  '[App Component] Browser Reload Auth',
  props<{ user: User }>()
);

export const clearUser = createAction(
  '[Header Page Component] Clear User');