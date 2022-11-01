import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { selectGender } from 'src/app/components/header/store/header.selector';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import { AppState } from 'src/app/store/app.state';
import {
  loadApparelCategoriesByBrandId,
  loadApparelCategoriesByBrandIdFailure,
  loadApparelCategoriesByBrandIdSuccess,
} from './product-category.action';

@Injectable()
export class ProductsCategoryEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoriesService: ApparelCategoriesService,
    private store: Store<AppState>
  ) {}

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApparelCategoriesByBrandId),
      concatLatestFrom((action) => this.store.select(selectGender)),
      mergeMap(([action, gender]) =>
        this.apparelCategoriesService
          .fetchApparelCategoriesByGenderIdAndBrandId(gender.id, action.brandId)
          .pipe(
            map((ResponseApparelCategories) =>
              loadApparelCategoriesByBrandIdSuccess({
                apparelCategories: ResponseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(
                loadApparelCategoriesByBrandIdFailure({
                  error: error,
                })
              )
            )
          )
      )
    )
  );
}
