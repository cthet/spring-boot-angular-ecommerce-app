import { createReducer, on } from '@ngrx/store';
import {
  loginSuccess,
} from '../../modules/auth/store/actions/login-api.actions';
import { User } from '../../modules/auth/interfaces/User';
import { browserReload, clearUser } from '../actions/auth.actions';

export const UserFeatureKey = 'user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer<State>(
  initialState,

  on(loginSuccess, (state, { authResponse }) => ({
    ...state,
    user: authResponse.user,
  })),

  on(browserReload, (state, { user }) => ({
    ...state,
    user : user,
  })),

  on(clearUser, (state) => ({
    ...state,
    user: null,
  }))
);

export const getUser = (state: State) => state.user;
