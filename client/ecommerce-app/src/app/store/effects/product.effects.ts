import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { productActions,  } from '../actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<Store>
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProduct),
      mergeMap((action) =>
        this.productsService
          .fetchProduct(action.productId)
          .pipe(
            map((ResponseProduct) =>
            productActions.loadProductSuccess({
                product: ResponseProduct
              })
            ),
            catchError((error) =>
              of(productActions.loadProductFailure({ error: error.message }))
            )
          )
      )
    ),
  )
}