import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { ProductsService } from '../../modules/services/products.service';
import { brandsSelectors, genderSelectors, productsSelectors } from '../selectors/index';
import { productsActions } from '../actions';
import { apparelCategoriesBrandSelectors } from '../../modules/brand/store/selectors';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<Store>
  ) {}

  loadProductsByBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.loadProductsByBrand),
      concatLatestFrom((action) => [
      this.store.select(genderSelectors.selectGender),
      this.store.select(brandsSelectors.selectBrand),
      ]),
      mergeMap(([action, gender, brand]) =>
        this.productsService
          .fetchProducts({
            gender: gender?.id,
            brand: brand?.id,
            category: 0,
          })
          .pipe(
            map((ResponseProducts) =>
            productsActions.loadProductsSuccess({
                products: ResponseProducts.products,
              })
            ),
            catchError((error) =>
              of(productsActions.loadProductsFailure({ error: error }))
            )
          )
      )
    )
  );

  loadfilteredProductsByBrand$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productsActions.loadFilteredProducts),
    concatLatestFrom((action) => [
    this.store.select(genderSelectors.selectGender),
    this.store.select(brandsSelectors.selectBrand),
    this.store.select(apparelCategoriesBrandSelectors.selectApparelCategories),
    this.store.select(productsSelectors.selectSort)
  ]),
    mergeMap(([action, gender, brand, categories, sort]) =>
      this.productsService
        .fetchProducts({
          gender: gender?.id,
          brand: brand?.id,
          category: categories
            .filter((category) => category.checked == true)
            .map((category) => category.id),
          sort: sort,
        })
        .pipe(
          map((ResponseProducts) =>
          productsActions.loadProductsSuccess({
              products: ResponseProducts.products,
            })
          ),
          catchError((error) =>
            of(productsActions.loadProductsFailure({ error: error }))
          )
        )
    )
  )
);

  // loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadProducts),
  //     concatLatestFrom((action) => [
  //       this.store.select(rootSelectors.selectGender),
  //       this.store.select(productsSelectors.selectBrandAndCategoryAndSort),
  //     ]),
  //     mergeMap(([action, gender, params]) =>
  //       this.productsService
  //         .fetchProducts({
  //           gender: gender!.id,
  //           brand: params!.brand!.id,
  //           category: params.category
  //             .filter((category) => category.checked == true)
  //             .map((category) => category.id),
  //           sort: params.sort,
  //         })
  //         .pipe(
  //           map((ResponseProducts) =>
  //             loadProductsSuccess({
  //               products: ResponseProducts.products,
  //             })
  //           ),
  //           catchError((error) => of(loadProductsFailure({ error: error })))
  //         )
  //     )
  //   )
  // );


}


