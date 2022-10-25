import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  map,
  catchError,
  of,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
  filter,
} from 'rxjs';
import { selectGenderId } from 'src/app/components/header/store/header.selector';
import { ApparelCategoriesService } from 'src/app/modules/services/apparel-categories.service';
import { BrandsService } from 'src/app/modules/services/brands.service';
import { AppState } from 'src/app/store/app.state';
import {
  loadBrandsByGenderId,
  loadApparelCategoriesBygenderId,
  loadBrandsByGenderIdFailure,
  loadBrandsByGenderIdSuccess,
  loadApparelCategoriesBygenderIdSuccess,
  loadApparelCategoriesBygenderIdFailure,
  setVideo,
  setVideoSuccess,
} from './navbar.actions';

@Injectable()
export class NavbarEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandsService,
    private apparelCategoriesService: ApparelCategoriesService,
    private store: Store<AppState>
  ) {}

  setVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setVideo),
      withLatestFrom(this.store.select(selectGenderId)),
      map(([action, genderId]) => {
        if (genderId === 1) {
          return setVideoSuccess({
            video:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_h_1900x851_fr-1080.mp4',
          });
        } else {
          return setVideoSuccess({
            video:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_f_1900x851_fr-1080.mp4',
          });
        }
      })
    )
  );

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrandsByGenderId),
      concatLatestFrom((action) => this.store.select(selectGenderId)),
      mergeMap(([action, genderId]) =>
        this.brandService.fetchBrandsByGenderId(genderId).pipe(
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
      concatLatestFrom((action) => this.store.select(selectGenderId)),
      mergeMap(([action, genderId]) =>
        this.apparelCategoriesService
          .fetchApparelCategoriesByGenderId(genderId)
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
