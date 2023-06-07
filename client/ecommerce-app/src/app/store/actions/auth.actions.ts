import { createAction, props } from "@ngrx/store";
import { User } from "../../modules/auth/interfaces/User";
import { AuthResponse } from "src/app/modules/auth/interfaces/AuthResponse";

export const authSuccess = createAction(
  '[Auth/API] Authentication User Success',
  props<{ authResponse: AuthResponse }>()
);

export const browserReload = createAction(
  '[App Component] Browser Reload Auth',
  props<{ user: User }>()
);

export const clearUser = createAction(
  '[Header Page Component] Clear User');

export const clearUserSuccess = createAction(
  '[Header Page Component] Clear User Success',
);

export const clearUserFailure = createAction(
  '[Header Page Component] Clear User Failure',
  props<{error: string}>()
);