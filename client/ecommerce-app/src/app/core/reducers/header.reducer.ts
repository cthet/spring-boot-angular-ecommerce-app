import { createReducer, on } from '@ngrx/store';
import { Gender } from 'src/app/core/models/gender';
import { setGender } from '../actions/header.actions';

export const HeaderFeatureKey = 'header';

export interface State {
  gender: Gender;
}

export const initialState: State = {
  gender: { id: 2, type: 'femme' },
};

export const reducer = createReducer<State>(
  initialState,

  on(setGender, (state, { gender }) => ({
    ...state,
    gender: gender,
  }))
);


export const getGender = (state: State) => state.gender;
