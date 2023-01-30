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
          })
          .pipe(
            map((ResponseProducts) =>
            productsActions.loadProductsSuccess({
                products: ResponseProducts.products,
                current_page: ResponseProducts.current_page,
                size: ResponseProducts.size,
                total_items: ResponseProducts.total_items,
                total_pages: ResponseProducts.total_pages
              })
            ),
            catchError((error) =>
              of(productsActions.loadProductsFailure({ error: error.message }))
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
    this.store.select(productsSelectors.selectSort),
    this.store.select(productsSelectors.selectCurrentPage),
  ]),
    mergeMap(([action, gender, brand, categories, sort, page]) =>
      this.productsService
        .fetchProducts({
          gender: gender?.id,
          brand: brand?.id,
          category: categories
            .filter((category) => category.checked == true)
            .map((category) => category.id),
          sort: sort,
          page: page-1 
        })
        .pipe(
          map((ResponseProducts) =>
          productsActions.loadProductsSuccess({
            products: ResponseProducts.products,
            current_page: ResponseProducts.current_page + 1,
            size: ResponseProducts.size,
            total_items: ResponseProducts.total_items,
            total_pages: ResponseProducts.total_pages
            })
          ),
          catchError((error) =>
            of(productsActions.loadProductsFailure({ error: error.message }))
          )
        )
    )
  )
);

}


