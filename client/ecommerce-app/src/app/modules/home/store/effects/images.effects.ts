import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { genderSelectors } from '../../../../store/selectors';
import { setGenderImages, setHomeImages } from '../actions/images.actions';

@Injectable()
export class ImagesEffects {
  constructor(private actions$: Actions, private store: Store<Store>) {}

  setHomeImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setHomeImages),
      withLatestFrom(this.store.select(genderSelectors.selectGender)),
      map(([action, gender]) => {
        if (gender!.id == 1) {
          return setGenderImages({
            headerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/men-brand-list-desktop.jpg`,
            footerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/e94505279fc44755b968a9f9ecd5f5dd.jpg`,
          });
        } else {
          return setGenderImages({
            headerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/women-brand-list-desktop.jpg`,
            footerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/5bc1a5cbcf1b44cd91f0dbfb54cdf335.jpg`,
          });
        }
      })
    )
  );
}
