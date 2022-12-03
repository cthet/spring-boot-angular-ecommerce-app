import { createAction, props } from "@ngrx/store";

export const setHomeVideo = createAction('[Navbar PageComponent] Set Home Video', props);

export const setVideo = createAction(
  '[Navbar Effects] Set Video',
  props<{ video: string }>()
);


export const removeVideo = createAction('[Navbar Effects] Remove Video');
