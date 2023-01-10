import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap } from 'rxjs';
import { countriesActions } from '../../../../store/actions';
import { CountryService } from 'src/app/modules/services/country.service';


@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService,
  ) {}

  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countriesActions.loadCountries),
      mergeMap((action) =>
        this.countryService.fetchCountries()
          .pipe(
            map((responseCountries) =>
            countriesActions.loadCountriesSuccess({
                countries: responseCountries.countries,
              })
            ),
            catchError((error) =>
              of(countriesActions.loadAddressesFailure({ error: error }))
            )
          )
      )
    )
  );
}

