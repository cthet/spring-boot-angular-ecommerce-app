import { createReducer, on } from '@ngrx/store';
import {
  signupFailure,
} from '../actions/signup-api.actions';
import {
  clearSignupEmail,
  setSignupEmail,
  signup,
} from '../actions/signup.actions';

export const signupFeatureKey = 'signup';

export interface State {
  signupForm_email: string | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: State = {
  signupForm_email: null,
  error: null,
  status: 'pending',
};

export const reducer = createReducer<State>(
  initialState,

  on(signup, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(signupFailure, (state, { error }) => ({
    ...state,
    error: null,
    status: 'success',
  })),

  on(signupFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(setSignupEmail, (state, { email }) => ({
    ...state,
    signupForm_email: email,
    status: 'pending',
  })),

  on(clearSignupEmail, (state) => ({
    ...state,
    signupForm_email: null,
    status: 'pending',
  }))
);

export const getError = (state: State) => state.error;

export const getSignupEmail = (state: State) => state.signupForm_email;

export const getStatus = (state: State) => state.status;
