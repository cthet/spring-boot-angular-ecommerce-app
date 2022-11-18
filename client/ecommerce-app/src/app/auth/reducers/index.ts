import * as fromAuth from './auth-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const AuthFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.AuthFeatureKey]: fromAuth.State;
}

export const selectAuthState =
  createFeatureSelector<fromAuth.State>(AuthFeatureKey);

export const selectSignupEmail = createSelector(
  selectAuthState,
  fromAuth.getSignupEmail
);

export const selectError = createSelector(selectAuthState, fromAuth.getError);

export const selectUser = createSelector(selectAuthState, fromAuth.getUser);

export const selectLoggedIn = createSelector(selectUser, (user) => !!user);
