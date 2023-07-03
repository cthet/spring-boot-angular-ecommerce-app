import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { apparelCategoriesSelectors, brandsSelectors, genderSelectors, productsSelectors } from '../selectors/index';
import { productsActions } from '../actions';
import { apparelCategoriesBrandSelectors } from '../../modules/brand/store/selectors';
import { ProductsService } from '../../services/products.service';
import { brandsApparelCategoriesSelectors } from '../../modules/apparel-category/store/selectors';

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
      mergeMap(([action, gender, brand]) => {
        console.log(brand?.id);
        return this.productsService
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
          )}
            
      )
      

    )
  );

  loadProductsByApparelCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productsActions.loadProductsByApparelCategory),
    concatLatestFrom((action) => [
    this.store.select(genderSelectors.selectGender),
    this.store.select(apparelCategoriesSelectors.selectApparelCategory),
    ]),
    mergeMap(([action, gender, apparel_category]) =>
      this.productsService
        .fetchProducts({
          gender: gender?.id,
          category: apparel_category?.id,
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

loadFilteredProductsFromBrand$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productsActions.loadFilteredProductsFromBrand),
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

  loadFilteredProductsFromApparelCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productsActions.loadFilteredProductsFromApparelCategory),
    concatLatestFrom((action) => [
    this.store.select(genderSelectors.selectGender),
    this.store.select(apparelCategoriesSelectors.selectApparelCategory),
    this.store.select(brandsApparelCategoriesSelectors.selectBrandCategories),
    this.store.select(productsSelectors.selectSort),
    this.store.select(productsSelectors.selectCurrentPage),
  ]),
    mergeMap(([action, gender, category, brands, sort, page]) =>
      this.productsService
        .fetchProducts({
          gender: gender?.id,
          category: category?.id,
          brand: brands
            .filter((brand) => brand.checked == true)
            .map((brand) => brand.id),
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


