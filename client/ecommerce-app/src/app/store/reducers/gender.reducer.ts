import { createReducer, on } from '@ngrx/store';
import { Gender } from '../../models/Gender';
import { browserReload, setGender } from '../actions/gender.actions';

export const GenderFeatureKey = 'gender';

export interface State {
  gender: Gender | null;
}

export const initialState: State = {
  gender: { id: 2, type: 'femme' },
};

export const reducer = createReducer<State>(
  initialState,

  on(setGender, (state, { gender }) => ({
    ...state,
    gender: gender,
  })),

  on(browserReload, (state, { gender }) => ({
    ...state,
    gender : gender,
  })),
);

export const getGender = (state: State) => state.gender;
