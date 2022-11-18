import { Injectable } from '@angular/core';
import { createEffect, ofType, concatLatestFrom, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, of } from 'rxjs';
import {
  loadBrandByBrandId,
  loadBrandByBrandIdSuccess,
  loadBrandByBrandIdFailure,
} from '../actions/brand.actions';
import { BrandService } from '../services/brand.service';
import * as fromHeader from '../../reducers/index';
import { setImageSuccess } from 'src/app/shared/actions/navbar.actions';

@Injectable()
export class BrandEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandService,
    private store: Store<Store>
  ) {}

  loadBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrandByBrandId),
      concatLatestFrom((action) => this.store.select(fromHeader.selectGender)),
      mergeMap(([action, gender]) =>
        this.brandService
          .fetchBrandByGenderIdAndBrandId(gender.id, action.brandId)
          .pipe(
            map((Brand) => loadBrandByBrandIdSuccess({ brand: Brand })),
            map((Brand) => setImageSuccess({ image: Brand.brand.image_url })),
            catchError((error) =>
              of(loadBrandByBrandIdFailure({ error: error }))
            )
          )
      )
    )
  );
}
