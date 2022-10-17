import { Actions, createEffect, ofType } from '@ngrx/effects';


import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import { loadApparelCategoriesBygenderId, loadApparelCategoriesFailure, loadApparelCategoriesSuccess } from './apparel-categories.actions';

@Injectable()
export class ApparelCategoriesEffect {
  constructor(private actions$: Actions, private apparelCategoriesService: ApparelCategoriesService) {}

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApparelCategoriesBygenderId),
      exhaustMap((action) =>
        this.apparelCategoriesService.fetchApparelCategoriesByGenderId(action.genderId).pipe(
          map((responseApparelCategories) =>
            loadApparelCategoriesSuccess({ apparelCategories: responseApparelCategories.apparel_categories })
          ),
          catchError((error) => of(loadApparelCategoriesFailure({ error: error })))
        )
      )
    )
  );
}
