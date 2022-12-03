import { createAction, props } from '@ngrx/store';

export const setHomeImages = createAction('[Home Page] Set Home Images');

export const setGenderImages = createAction('[Home Page] Set Gender Home Images',
 props<{headerImage: string, footerImage: string}>()
 );
