import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import { BrandsService } from 'src/app/modules/services/brands.service';
import { loadApparelCategoriesByGenderIdAndBrandId, loadApparelCategoriesByGenderIdAndBrandIdFailure, loadApparelCategoriesByGenderIdAndBrandIdSuccess, loadBrandByGenderIdAndBrandId, loadBrandByGenderIdAndBrandIdFailure, loadBrandByGenderIdAndBrandIdSuccess } from './product-list.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandsService,
    private apparelCategoriesService: ApparelCategoriesService
  ) {}

  loadBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrandByGenderIdAndBrandId),
      exhaustMap((action) =>
        this.brandService
          .fetchBrandByGenderIdAndBrandId(action.genderId, action.brandId)
          .pipe(
            map((Brand) => loadBrandByGenderIdAndBrandIdSuccess({ brand: Brand })),
            catchError((error) => of(loadBrandByGenderIdAndBrandIdFailure({ error: error })))
          )
      )
    )
  );

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
              of(loadApparelCategoriesByGenderIdAndBrandIdFailure({ error: error }))
            )
          )
      )
    )
  );
}
