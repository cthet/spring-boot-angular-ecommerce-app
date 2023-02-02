import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { imageActions } from '../actions';
import { brandsSelectors, genderSelectors } from '../selectors';

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

setApparelCategoryImages$ = createEffect(() =>
this.actions$.pipe(
  ofType(imageActions.setApparelCategoryImage),
  withLatestFrom(this.store.select(genderSelectors.selectGender)),
  map(([action, gender]) => {
    if (gender!.id == 1) {
      return imageActions.setImage({
        image: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/pret-a-porter/ba24b75d3108417db4fbbbaf0efde960.jpeg`,
      })    
    } else {
      return imageActions.setImage({
        image: `https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/pret-a-porter/3f158c6d6fec4dda912927820c21d6a1.jpeg`,
      });
    }
  })
)
);

}

