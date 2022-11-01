import { createReducer, on } from '@ngrx/store';
import { Gender } from 'src/app/modules/interfaces/models/gender';
import { setGender } from './header.actions';


export interface HeaderState {
  gender: Gender,
}

export const initialState: HeaderState = {
  gender: {id: 2, type: "femme"},
};

export const headerReducer = createReducer<HeaderState>(
  initialState,

  on(setGender, (state, { gender }) => ({
    ...state,
    gender: gender,
  }))
);
