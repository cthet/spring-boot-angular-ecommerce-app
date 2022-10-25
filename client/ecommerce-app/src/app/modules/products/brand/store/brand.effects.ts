import { Injectable } from '@angular/core';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { createEffect, ofType, concatLatestFrom, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, of } from 'rxjs';
import { selectGenderId } from 'src/app/components/header/store/header.selector';
import { BrandsService } from 'src/app/modules/services/brands.service';
import { AppState } from 'src/app/store/app.state';
import {
  loadBrandByBrandId,
  loadBrandByBrandIdSuccess,
  loadBrandByBrandIdFailure,
} from './brand.actions';

@Injectable()
export class BrandEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandsService,
    private store: Store<AppState>
  ) {}

  loadBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrandByBrandId),
      concatLatestFrom((action) => this.store.select(selectGenderId)),
      mergeMap(([action, genderId]) =>
        this.brandService
          .fetchBrandByGenderIdAndBrandId(genderId, action.brandId)
          .pipe(
            map((Brand) =>
              loadBrandByBrandIdSuccess({ brand: Brand })
            ),
            catchError((error) =>
              of(loadBrandByBrandIdFailure({ error: error }))
            )
          )
      )
    )
  );
}
