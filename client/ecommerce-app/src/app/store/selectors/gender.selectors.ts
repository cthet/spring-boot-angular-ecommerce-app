import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromGender from '../reducers/gender.reducer'

export const selectGenderState = createFeatureSelector<fromGender.State>(fromGender.GenderFeatureKey);

export const selectGender = createSelector(
  selectGenderState,
  fromGender.getGender
); 
