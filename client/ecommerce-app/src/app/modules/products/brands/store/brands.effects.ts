import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BrandsService } from 'src/app/modules/services/brands.service';
import {
  loadBrands,
  loadBrandsFailure,
  loadBrandsSuccess,
} from './brands.actions';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class BrandsEffects {
  constructor(private actions$: Actions, private brandService: BrandsService) {}

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrands),
      exhaustMap((action) =>
        this.brandService.fetchBrandsByGenderId(action.id).pipe(
          map((responseBrands) =>
            loadBrandsSuccess({ brands: responseBrands.brand_categories })
          ),
          catchError((error) => of(loadBrandsFailure({ error: error })))
        )
      )
    )
  );
}
