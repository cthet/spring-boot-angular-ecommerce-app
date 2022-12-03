import { createSelector } from "@ngrx/store"
import { selectAuthState } from ".."
import * as fromLogin from '../reducers/login.reducer';

export const selectLoginState = createSelector(
  selectAuthState,
  (state) => state.login)
  

export const selectLoginError = createSelector(
  selectLoginState,
  fromLogin.getError
)
  
export const selectLoginStatus = createSelector(
  selectLoginState,
  fromLogin.getStatus
)

export const selectSignupState = createSelector(
  selectAuthState,
  (state) => state.signup
)    