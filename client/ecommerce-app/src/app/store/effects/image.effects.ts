import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { imageActions } from '../actions';
import { brandsSelectors } from '../selectors';

@Injectable()
export class ImageEffects {

  constructor(
    private actions$: Actions,
    private store: Store<Store>,
  ) {}


  setLoginImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageActions.setLoginImage),
      map((action) =>
      imageActions.setImage({
          image: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/auth-page/identification-header_retina.jpg`,
        })
      )
    )
  );

  setBrandImage$ = createEffect(() =>
  this.actions$.pipe(
    ofType(imageActions.setBrandImage),
    withLatestFrom(this.store.select(brandsSelectors.selectBrand)),
    map(([action, brand]) => 
    imageActions.setImage({
        image: brand!.image_url,
      })    
    )
  )
);

}

