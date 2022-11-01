import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { selectGender } from 'src/app/components/header/store/header.selector';
import { ProductsService } from 'src/app/modules/services/products.service';
import { AppState } from 'src/app/store/app.state';
import {
  loadProducts,
  loadProductsByBrandId,
  loadProductsByBrandIdFailure,
  loadProductsByBrandIdSuccess,
  loadProductsFailure,
  loadProductsSuccess,
  loadSortedProducts,
  loadSortedProductsFailure,
  loadSortedProductsSuccess,
} from './product-list.action';
import {
  selectGenderAndBrandAndCategory,
  selectGenderAndBrandAndCategoryAndSort,
  selectProducts,
} from './product-list.selector';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  loadProductsByBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsByBrandId),
      concatLatestFrom((action) => this.store.select(selectGender)),
      mergeMap(([action, gender]) =>
        this.productsService
          .fetchProducts({
            gender: gender.id,
            brand: action.brandId,
            category: 0,
          })
          .pipe(
            map((ResponseProducts) =>
              loadProductsByBrandIdSuccess({
                products: ResponseProducts.products,
              })
            ),
            catchError((error) =>
              of(loadProductsByBrandIdFailure({ error: error }))
            )
          )
      )
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      concatLatestFrom((action) => this.store.select(selectGenderAndBrandAndCategoryAndSort)),
      mergeMap(([action, params]) =>
        this.productsService
          .fetchProducts({
            gender: params.gender.id,
            brand: params.brand.id,
            category: params.category
                .filter((category) => category.checked == true)
                .map((category) => category.id),
            sort: params.sort,
          })
          .pipe(
            map((ResponseProducts) =>
              loadProductsSuccess({
                products: ResponseProducts.products,
              })
            ),
            catchError((error) =>
              of(loadProductsFailure({ error: error }))
            )
          )
      )
    )
  );

  loadSortedProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSortedProducts),
      concatLatestFrom((action) =>
        this.store.select(selectGenderAndBrandAndCategory)
      ),
      mergeMap(([action, params]) =>
        this.productsService
          .fetchProducts({
            gender: params.gender.id,
            brand: params.brand.id,
            category: params.category
                .filter((category) => category.checked == true)
                .map((category) => category.id),
            sort: action.sort             
          })
          .pipe(
            map((ResponseProducts) =>
            loadSortedProductsSuccess({
                products: ResponseProducts.products,
              })
            ),
            catchError((error) =>
              of(loadSortedProductsFailure({ error: error }))
            )
          )
      )
    )
  );
}
