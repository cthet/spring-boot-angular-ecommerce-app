import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { selectGenderId } from 'src/app/components/header/store/header.selector';
import { ProductsService } from 'src/app/modules/services/products.service';
import { AppState } from 'src/app/store/app.state';
import { loadProductsByBrandIdAndCategoryId, loadProductsByBrandIdAndCategoryIdFailure, loadProductsByBrandIdAndCategoryIdSuccess } from './product-list.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,   
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}



  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProductsByBrandIdAndCategoryId),
    concatLatestFrom(action => this.store.select(selectGenderId)),
    mergeMap(([action, genderId]) =>
      this.productsService.fetchProducts({gender: genderId, category: action.categoryId, brand:action.brandId})
        .pipe(
          map((ResponseProducts) => loadProductsByBrandIdAndCategoryIdSuccess({ products: ResponseProducts.products })),
          catchError((error) => of(loadProductsByBrandIdAndCategoryIdFailure({ error: error })))
        )
    )
  )
);

}
