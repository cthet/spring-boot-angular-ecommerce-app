import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../../interfaces/AuthResponse';

export const loginSuccess = createAction(
  '[Auth/API] Login User Success',
  props<{ authResponse: AuthResponse }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login User Failure',
  props<{ error: string }>()
);


