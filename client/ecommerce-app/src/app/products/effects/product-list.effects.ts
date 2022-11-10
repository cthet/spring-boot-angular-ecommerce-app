import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
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
} from '../actions/product-list.action';
import { ProductsService } from '../services/products.service';
import * as fromProducts from '../reducers';
import * as fromHeader from '../../reducers/index';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<Store>
  ) {}

  loadProductsByBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsByBrandId),
      concatLatestFrom((action) => this.store.select(fromHeader.selectGender)),
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
      concatLatestFrom((action) => [
        this.store.select(fromHeader.selectGender),
        this.store.select(fromProducts.selectBrandAndCategoryAndSort),
      ]),
      mergeMap(([action, gender, params]) =>
        this.productsService
          .fetchProducts({
            gender: gender.id,
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
            catchError((error) => of(loadProductsFailure({ error: error })))
          )
      )
    )
  );

  loadSortedProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSortedProducts),
      concatLatestFrom((action) => [
      this.store.select(fromHeader.selectGender),
      this.store.select(fromProducts.selectBrandAndCategoryAndSort),
    ]),
      mergeMap(([action, gender, params]) =>
        this.productsService
          .fetchProducts({
            gender: gender.id,
            brand: params.brand.id,
            category: params.category
              .filter((category) => category.checked == true)
              .map((category) => category.id),
            sort: action.sort,
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
