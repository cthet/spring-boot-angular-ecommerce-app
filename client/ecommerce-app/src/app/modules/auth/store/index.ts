import * as fromLoginPage from './reducers/login.reducer';
import * as fromSignupPage from './reducers/signup.reducer'
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const AuthFeatureKey = 'auth';

export function reducers(state: AuthState |undefined, action: Action) {
  return combineReducers({
    [fromLoginPage.loginFeatureKey]: fromLoginPage.reducer,
    [fromSignupPage.signupFeatureKey]: fromSignupPage.reducer,
  })(state, action);
}

export interface AuthState {
  [fromLoginPage.loginFeatureKey]: fromLoginPage.State;
  [fromSignupPage.signupFeatureKey]: fromSignupPage.State;
}

export const selectAuthState =
createFeatureSelector<AuthState>(AuthFeatureKey);




