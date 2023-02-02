import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, mergeMap, tap } from 'rxjs';
import { genderSelectors } from '../selectors/index';
import { HyphenPipe } from '../../utility/pipes/hyphenPipe';
import { Router } from '@angular/router';
import { brandsActions } from '../actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { BrandService } from '../../services/brand.service';


@Injectable()
export class BrandsEffects {
  constructor(
    private actions$: Actions,
    private brandService: BrandService,
    private localStorageService: LocalStorageService,
    private store: Store<Store>,
    private router: Router
  ) {}

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(brandsActions.loadBrands),
      concatLatestFrom((action) => this.store.select(genderSelectors.selectGender)),
      mergeMap(([action, gender]) => 
        this.brandService.fetchBrandsByGenderId(gender!.id).pipe(
          map((responseBrands) =>
          brandsActions.loadBrandsSuccess({
              brands: responseBrands.brand_categories,
            })
          ),        
          catchError((error) =>
            of(brandsActions.loadBrandsFailure({ error: error.message }))
          )         
        )
      )
    )
  );

    setBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(brandsActions.setBrand),  
      tap((action) => this.localStorageService.saveBrand(action.brand)), 
      concatLatestFrom((action) => this.store.select(genderSelectors.selectGender)),      
      tap(([action, gender]) => {        
        let brand = new HyphenPipe().transform(action.brand.brand_category); 
        this.router.navigateByUrl(`${gender?.type}/${brand}`);
        }),                      
      ), { dispatch: false }
    );  
}



