import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap, tap } from 'rxjs';
import { genderSelectors } from '../selectors/index';
import { apparelCategoriesActions } from '../actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { ApparelCategoryService } from '../../services/apparel-category.service';


@Injectable()
export class ApparelCategoriesEffects {
  constructor(
    private actions$: Actions,
    private apparelCategoryService: ApparelCategoryService,
    private localStorageService: LocalStorageService,
    private store: Store<Store>,
    private router: Router
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
              of(apparelCategoriesActions.loadApparelCategoriesFailure({ error: error.message }))
            )
          )
      )
    )
  );

  setApparelCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(apparelCategoriesActions.setApparelCategory),  
    tap((action) => this.localStorageService.saveApparelCategory(action.apparelCategory)), 
    concatLatestFrom((action) => this.store.select(genderSelectors.selectGender)),       
    tap(([action, gender]) => {        
      this.router.navigateByUrl(`${gender?.type}/pret-a-porter/${action.apparelCategory.apparel_category}`);
      }),                      
    ), { dispatch: false }
  );  
}

