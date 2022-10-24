import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { BrandsService } from 'src/app/modules/services/brands.service';
import { ProductsService } from 'src/app/modules/services/products.service';
import { loadBrandByGenderIdAndBrandId, loadBrandByGenderIdAndBrandIdFailure, loadBrandByGenderIdAndBrandIdSuccess, loadProductsByGenderIdAndBrandIdAndCategoryId, loadProductsByGenderIdAndBrandIdAndCategoryIdFailure, loadProductsByGenderIdAndBrandIdAndCategoryIdSuccess } from './product-list.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandsService,
    private productsService: ProductsService
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

  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProductsByGenderIdAndBrandIdAndCategoryId),
    exhaustMap((action) =>
      this.productsService.fetchProducts({gender: action.genderId, category: action.categoryId, brand:action.brandId})
        .pipe(
          map((ResponseProducts) => loadProductsByGenderIdAndBrandIdAndCategoryIdSuccess({ products: ResponseProducts.products })),
          catchError((error) => of(loadProductsByGenderIdAndBrandIdAndCategoryIdFailure({ error: error })))
        )
    )
  )
);

}
