import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import {
  loadApparelCategoriesByGenderIdAndBrandId,
  loadApparelCategoriesByGenderIdAndBrandIdSuccess,
  loadApparelCategoriesByGenderIdAndBrandIdFailure,
} from './product-category.action';

@Injectable()
export class ProductsCategoryEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoriesService: ApparelCategoriesService
  ) {}

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApparelCategoriesByGenderIdAndBrandId),
      exhaustMap((action) =>
        this.apparelCategoriesService
          .fetchApparelCategoriesByGenderIdAndBrandId(
            action.genderId,
            action.brandId
          )
          .pipe(
            map((ResponseApparelCategories) =>
            loadApparelCategoriesByGenderIdAndBrandIdSuccess({
                apparelCategories: ResponseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(
                loadApparelCategoriesByGenderIdAndBrandIdFailure({
                  error: error,
                })
              )
            )
          )
      )
    )
  );
}
