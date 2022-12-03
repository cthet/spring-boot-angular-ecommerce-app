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
            headerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg`,
            footerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg`,
          });
        } else {
          return setGenderImages({
            headerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/Big_desktop-exquisite-gucci_2x_20220930164026.jpg`,
            footerImage: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/Big_desktop-exquisite-gucci_2x_20220930164026.jpg`,
          });
        }
      })
    )
  );
}
