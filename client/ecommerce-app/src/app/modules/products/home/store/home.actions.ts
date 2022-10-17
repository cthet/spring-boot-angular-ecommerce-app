import { createAction, props } from '@ngrx/store';

export const setHomeImages = createAction(
  '[Homegender Component] Set Header Image',
  props<{ headerImage: string, footerImage: string }>()
);

