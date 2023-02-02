import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { BrandsResponse } from '../../../../models/BrandsResponse';
import { BrandService } from '../../../../services/brand.service';
import { apparelCategoriesSelectors, genderSelectors } from '../../../../store/selectors';
import { brandCategoriesActions } from '../actions';

@Injectable()
export class BrandCategoriesEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandService,
    private store: Store<Store>
  ) {}

  loadBrandsByApparelCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(brandCategoriesActions.loadBrandCategoriesByApparelCategory),
      concatLatestFrom((action) => [
      this.store.select(genderSelectors.selectGender),
      this.store.select(apparelCategoriesSelectors.selectApparelCategory),
      ]),
      mergeMap(([action, gender, apparelCategory]) =>
        this.brandService
          .fetchBrandsByGenderIdAndApparelCategoryId(gender!.id, apparelCategory!.id)
          .pipe(
            map((brandsResponse: BrandsResponse) =>
            brandCategoriesActions.loadBrandCategoriesByApparelCategorySuccess({
                brands: brandsResponse.brand_categories,
              })
            ),
            catchError((error) =>
              of(
                brandCategoriesActions.loadBrandCategoriesByApparelCategoryFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );

}
