import { createAction, props } from "@ngrx/store";

export const signupFailure = createAction(
  '[Auth/API] Signup User Failure',
  props<{ error: string }>()
);