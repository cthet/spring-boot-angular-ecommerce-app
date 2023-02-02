import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, catchError, of, mergeMap } from "rxjs";
import { ProductsService } from "../../../../services/products.service";
import { genderSelectors } from "../../../../store/selectors";
import { newProductsActions } from "../actions";

@Injectable()
export class NewProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<Store>
  ) {}

  loadNewProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newProductsActions.loadNewProducts),
      concatLatestFrom((action) => 
      this.store.select(genderSelectors.selectGender)),      
      mergeMap(([action, gender]) => 
        this.productsService
          .fetchNewProducts({
            gender: gender?.id,
          })
          .pipe(
            map((ResponseProducts) =>
            newProductsActions.loadNewProductsSuccess({
                products: ResponseProducts.products,
              })
            ),
            catchError((error) =>
              of(newProductsActions.loadNewProductsFailure({ error : error.message }))
            )
          )
      )
    )
  );
}