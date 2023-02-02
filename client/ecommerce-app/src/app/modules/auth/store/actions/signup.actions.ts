import { createAction, props } from "@ngrx/store";
import { Civility } from "../../../../models/Civility";

export const setSignupEmail = createAction(
  '[Login Page] Set Signup Email',
  props<{ email: string }>()
);

export const signup = createAction(
  '[Signup Page] Signup User',
  props<{
    civility: Civility;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>()
);


export const clearSignupEmail = createAction('[Auth Effect] Clear signupEmail');