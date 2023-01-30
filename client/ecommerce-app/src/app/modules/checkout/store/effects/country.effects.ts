import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap } from 'rxjs';
import { CountryService } from 'src/app/modules/services/country.service';
import { countryActions } from '../actions';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService,
  ) {}

  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryActions.loadCountries),
      mergeMap((action) =>
        this.countryService.fetchCountries()
          .pipe(
            map((responseCountries) =>
            countryActions.loadCountriesSuccess({
                countries: responseCountries.countries,
              })
            ),
            catchError((error) =>
              of(countryActions.loadAddressesFailure({ error: error.message }))
            )
          )
      )
    )
  );
}

