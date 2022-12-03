import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap, withLatestFrom } from 'rxjs';
import { brandsSelectors, genderSelectors } from '../../../../store/selectors';
import { ApparelCategoryService } from '../../../services/apparel-category.service';
import { apparelCategoriesBrandActions } from '../actions';
import { apparelCategoriesBrandSelectors } from '../selectors';

@Injectable()
export class CategoriesEffects {
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
            map((ResponseApparelCategories) =>
            apparelCategoriesBrandActions.loadApparelCategoriesByBrandSuccess({
                apparelCategories: ResponseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(
                apparelCategoriesBrandActions.loadApparelCategoriesByBrandFailure({
                  error: error,
                })
              )
            )
          )
      )
    )
  );

  // checkCategory$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(apparelCategoriesBrandActions.checkApparelCategory),
  //   withLatestFrom(this.store.select(apparelCategoriesBrandSelectors.selectApparelCategories)),
  //   map(([action, categories]) => {

  //   categories.map((category) => {
  //     if (category.id === action.apparelCategoryId) {
  //       return { ...category, checked: true };
  //     }
  //     return category;
  //   });     

  //   return apparelCategoriesBrandActions.setApparelCategories({apparelCategories: categories});
  //   }))
    


// uncheckCategory$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(apparelCategoriesBrandActions.checkApparelCategory),
//   withLatestFrom(this.store.select(apparelCategoriesBrandSelectors.selectApparelCategories)),
//   map(([action, categories]) => {

//   categories.map((category) => {
//     if (category.id === action.apparelCategoryId) {
//       return { ...category, checked: false };
//     }
//     return category;
//   });     

//   return apparelCategoriesBrandActions.setApparelCategories({apparelCategories: categories});
//   }))
  
// );
}
