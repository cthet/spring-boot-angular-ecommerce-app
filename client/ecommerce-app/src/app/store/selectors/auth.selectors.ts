import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserFeatureKey } from "../reducers/auth-reducer";
import * as fromAuth from '../reducers/auth-reducer'

export const selectUserState = createFeatureSelector<fromAuth.State>(UserFeatureKey);
  
export const selectUser = createSelector(
  selectUserState,
  fromAuth.getUser
);

export const selectLoggedIn = createSelector(
  selectUser, (user) => !!user
);
