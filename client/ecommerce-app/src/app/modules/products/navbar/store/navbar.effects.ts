import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import { BrandsService } from 'src/app/modules/services/brands.service';
import {
  loadBrandsByGenderId,
  loadApparelCategoriesBygenderId,
  loadBrandsByGenderIdFailure,
  loadBrandsByGenderIdSuccess,
  loadApparelCategoriesBygenderIdSuccess,
  loadApparelCategoriesBygenderIdFailure,
} from './navbar.actions';

@Injectable()
export class NavbarEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandsService,
    private apparelCategoriesService: ApparelCategoriesService
  ) {}

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrandsByGenderId),
      exhaustMap((action) =>
        this.brandService.fetchBrandsByGenderId(action.genderId).pipe(
          map((responseBrands) =>
            loadBrandsByGenderIdSuccess({
              brands: responseBrands.brand_categories,
            })
          ),
          catchError((error) =>
            of(loadBrandsByGenderIdFailure({ error: error }))
          )
        )
      )
    )
  );

  loadApparelCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApparelCategoriesBygenderId),
      exhaustMap((action) =>
        this.apparelCategoriesService
          .fetchApparelCategoriesByGenderId(action.genderId)
          .pipe(
            map((responseApparelCategories) =>
              loadApparelCategoriesBygenderIdSuccess({
                apparelCategories: responseApparelCategories.apparel_categories,
              })
            ),
            catchError((error) =>
              of(loadApparelCategoriesBygenderIdFailure({ error: error }))
            )
          )
      )
    )
  );
}
//   loadBrandImage$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(loadBrandImage),
//     exhaustMap((action) =>
//       this.brandService
//         .fetchBrandsByGenderId(action.genderId)
//         .pipe(
//           map((responseApparelCategories) =>
//           loadBrandImageSuccess({
//             brandImage: responseApparelCategories.brand_categories.filter(category => category.id==action.brandId).map((brand: Brand) => brand.image_url)[0],
//           })
//           ),
//           catchError((error) =>
//             of(loadBrandImageFailure({ error: error }))
//           )
//         )
//     )
//   )
// );
