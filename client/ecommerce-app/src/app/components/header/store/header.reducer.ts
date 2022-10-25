import { createReducer, on } from '@ngrx/store';
import { setGender } from './header.actions';


export interface HeaderState {
  genderId: number;
}

export const initialState: HeaderState = {
  genderId: 2,
};

export const headerReducer = createReducer<HeaderState>(
  initialState,

  on(setGender, (state, { genderId }) => ({
    ...state,
    genderId: genderId,
  }))
);
