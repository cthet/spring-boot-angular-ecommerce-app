import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { videoActions } from '../actions';

import { genderSelectors } from '../selectors';

@Injectable()
export class VideoEffects {

  constructor(
    private actions$: Actions,
    private store: Store<Store>,
  ) {}

  setHomeVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videoActions.setHomeVideo),
      withLatestFrom(this.store.select(genderSelectors.selectGender)),
      map(([action, gender]) => {
        if (gender?.id === 1) {
          return videoActions.setVideo({
            video:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_h_1900x851_fr-1080.mp4',
          });
        } else {
          return videoActions.setVideo({
            video:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_f_1900x851_fr-1080.mp4',
          });
        }
      })
    )
  );


}

