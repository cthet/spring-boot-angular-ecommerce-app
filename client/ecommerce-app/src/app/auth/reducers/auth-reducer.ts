import { createReducer, on } from '@ngrx/store';
import {
  browserReload,
  clearError,
  clearSignupEmail,
  login,
  loginFailure,
  loginSuccess,
  setSignupEmail,
  signup,
  signupFailure,
  signupSuccess,
} from '../actions/auth.actions';
import { User } from '../interfaces/User';

export const AuthFeatureKey = 'auth';

export interface State {
  user: User | null;
  signupForm_email: string;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  user: null,
  signupForm_email: '',
  error: '',
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(login, signup, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loginSuccess, (state, {authResponse}) => ({
    ...state,
    user: authResponse.user,
    status: 'success',
  })),

  on(signupSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(loginFailure, signupFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setSignupEmail, (state, { email }) => ({
    ...state,
    signupForm_email: email,
    status: 'pending',
  })),

  on(browserReload, (state, {user}) => ({
    ...state,
    id: user.id,
    email: user.email,
    role: user.role,
    status: 'pending',
  })),

  on(clearError, (state) => ({
    ...state,
    error: '',
    status: 'pending',
  })),

  on(clearSignupEmail, (state) => ({
    ...state,
    signupForm_email: '',
    status: 'pending',
  })),
);

export const getError = (state: State) => state.error;

export const getSignupEmail = (state: State) => state.signupForm_email;

export const getUser = (state: State) => state.user;

