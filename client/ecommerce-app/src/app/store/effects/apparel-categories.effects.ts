import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { genderSelectors } from '../selectors/index';
import { ApparelCategoryService } from '../../modules/services/apparel-category.service';
import { apparelCategoriesActions } from '../actions';


@Injectable()
export class ApparelCategoriesEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoryService: ApparelCategoryService,
    private store: Store<Store>
  ) {}

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apparelCategoriesActions.loadApparelCategories),
      concatLatestFrom((action) => this.store.select(genderSelectors.selectGender)),
      mergeMap(([action, gender]) =>
        this.apparelCategoryService
          .fetchApparelCategoriesByGenderId(gender!.id)
          .pipe(
            map((responseApparelCategories) =>
            apparelCategoriesActions.loadApparelCategoriesSuccess({
                apparelCategories: responseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(apparelCategoriesActions.loadApparelCategoriesFailure({ error: error }))
            )
          )
      )
    )
  );
}

