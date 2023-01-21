import { createAction, props } from '@ngrx/store';
import { Gender } from '../../models/Gender';

export const setGender = createAction(
  '[App Component] Set Gender',
  props<{ gender: Gender }>()
);

export const browserReload = createAction(
  '[App Component] Browser Reload Gender',
  props<{ gender: Gender }>()
);