import { createReducer, on } from '@ngrx/store';
import { User } from '../../modules/auth/interfaces/User';
import { authSuccess, browserReload, clearUser, clearUserFailure, clearUserSuccess } from '../actions/auth.actions';

export const UserFeatureKey = 'user';

export interface State {
  user: User | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  user: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(authSuccess, (state, { authResponse }) => ({
    ...state,
    user: authResponse.user,
    status: 'success',
  })),

  on(browserReload, (state, { user }) => ({
    ...state,
    user : user,
    status: 'success',
  })),

  on(clearUser, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(clearUserSuccess, (state) => ({
    ...state,
    user: null,
    status: 'success',
    error: null
  })),

  on(clearUserFailure, (state, {error}) => ({
    ...state,
    status: 'error',
    error: error
  }))
);

export const getUser = (state: State) => state.user;
