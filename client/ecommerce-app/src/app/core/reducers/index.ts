import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromHeader from '../reducers/header.reducer';

export const HeaderFeatureKey = 'header';

export interface HeaderState {
  [fromHeader.HeaderFeatureKey]: fromHeader.State;
}

export const selectHeaderState =
  createFeatureSelector<HeaderState>(HeaderFeatureKey);

export const selectGender = createSelector(
  selectHeaderState,
  (state) => state.header.gender
);
