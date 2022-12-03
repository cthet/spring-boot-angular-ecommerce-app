import { createReducer, on } from '@ngrx/store';
import {
  loginFailure,
  loginSuccess,
} from '../actions/login-api.actions';
import {
  login,
} from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(login, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loginSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success',
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

);

export const getError = (state: State) => state.error;

export const getStatus = (state: State) => state.status;

