import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { ApparelCategoriesResponse } from '../../../../models/ApparelCategoriesResponse';
import { ApparelCategoryService } from '../../../../services/apparel-category.service';
import { brandsSelectors, genderSelectors } from '../../../../store/selectors';
import { apparelCategoriesBrandActions } from '../actions';

@Injectable()
export class BrandCategoriesEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoryService: ApparelCategoryService,
    private store: Store<Store>
  ) {}

  loadApparelCategoriesByBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apparelCategoriesBrandActions.loadApparelCategoriesByBrand),
      concatLatestFrom((action) => [
      this.store.select(genderSelectors.selectGender),
      this.store.select(brandsSelectors.selectBrand),
      ]),
      mergeMap(([action, gender, brand]) =>
        this.apparelCategoryService
          .fetchApparelCategoriesByGenderIdAndBrandId(gender!.id, brand!.id)
          .pipe(
            map((ResponseApparelCategories: ApparelCategoriesResponse) =>
            apparelCategoriesBrandActions.loadApparelCategoriesByBrandSuccess({
                apparelCategories: ResponseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(
                apparelCategoriesBrandActions.loadApparelCategoriesByBrandFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );

}
