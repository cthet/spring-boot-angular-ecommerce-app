import { createAction, props } from "@ngrx/store";

export const signupSuccess = createAction(
  '[Auth/API] Signup User Success',
);

export const signupFailure = createAction(
  '[Auth/API] Signup User Failure',
  props<{ error: string }>()
);