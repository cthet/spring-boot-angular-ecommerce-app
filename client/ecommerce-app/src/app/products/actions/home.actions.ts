import { createAction, props } from '@ngrx/store';

export const setHomeImages = createAction(
  '[Home] Set Header Image',
  props<{ headerImage: string, footerImage: string }>()
);

