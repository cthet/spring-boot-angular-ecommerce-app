import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { HeaderState } from "./header.reducer";

export const selectHeaderState = (state: AppState) => state.header;

export const selectGender = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.gender
);
