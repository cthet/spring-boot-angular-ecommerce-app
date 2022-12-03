import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { genderActions } from '../actions';


@Injectable()
export class GenderEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  setGender$ = createEffect(() =>
    this.actions$.pipe(
      ofType(genderActions.setGender),
      tap((action) => 
        this.localStorageService.saveGender(action.gender),
      )),
    {dispatch: false}
  )
}