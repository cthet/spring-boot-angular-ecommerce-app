import { createAction, props } from '@ngrx/store';
import { Gender } from 'src/app/core/models/gender';

export const setGender = createAction(
  '[Header] Set Gender',
  props<{ gender: Gender }>()
);
