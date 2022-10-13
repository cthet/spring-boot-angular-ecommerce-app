import { createAction, props } from '@ngrx/store';

export const loadHomeImages = createAction(
  '[Homegender Component] Load Header Image',
  props<{ headerImage: string, footerImage: string }>()
);

