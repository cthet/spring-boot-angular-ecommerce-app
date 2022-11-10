import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import {
  loadApparelCategoriesByBrandId,
  loadApparelCategoriesByBrandIdFailure,
  loadApparelCategoriesByBrandIdSuccess,
} from '../actions/product-category.action';
import { ApparelCategoriesService } from '../services/apparel-categories.service';
import * as fromHeader from '../../reducers/index';

@Injectable()
export class ProductsCategoryEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoriesService: ApparelCategoriesService,
    private store: Store<Store>
  ) {}

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApparelCategoriesByBrandId),
      concatLatestFrom((action) => this.store.select(fromHeader.selectGender)),
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
