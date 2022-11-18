import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../interfaces/AuthResponse';
import { User } from '../interfaces/User';

export const login = createAction(
  '[Login Page] Login User',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ authResponse: AuthResponse }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: string }>()
);

export const setSignupEmail = createAction(
  '[Login Page] Set Signup Email',
  props<{ email: string }>()
);

export const signup = createAction(
  '[Signup Page] Signup User',
  props<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>()
);

export const signupSuccess = createAction(
  '[Auth Effect] Signup User Success',
  props<{ email: string; password: string }>()
);

export const signupFailure = createAction(
  '[Auth Effect] Signup User Failure',
  props<{ error: string }>()
);

export const clearError = createAction('[Auth Effect] Clear error');

export const clearSignupEmail = createAction('[Auth Effect] Clear signupEmail');

export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: User }>()
);
