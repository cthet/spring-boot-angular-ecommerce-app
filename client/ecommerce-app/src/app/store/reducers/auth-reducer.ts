import { createReducer, on } from '@ngrx/store';
import { User } from '../../modules/auth/interfaces/User';
import { authSuccess, browserReload, clearUser } from '../actions/auth.actions';

export const UserFeatureKey = 'user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer<State>(
  initialState,

  on(authSuccess, (state, { authResponse }) => ({
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
