import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, concatMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { signupActions, signupApiActions } from '../actions';

@Injectable()
export class SignupEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}


  setSignupEmail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signupActions.setSignupEmail),
        tap(() => this.router.navigate(['/connexion/signup']))
      ),
    { dispatch: false }
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupActions.signup),
      concatMap((action) =>
        this.authService
          .signup(
            action.civility,
            action.firstName,
            action.lastName,
            action.email,
            action.password
          )
          .pipe(
            map(() => 
            signupApiActions.signupSuccess()),
            tap(() => this.router.navigate(['/connexion'])),            
            catchError((error) =>
              of(signupApiActions.signupFailure({ error: error.message }))
            )
          )
      )
    )
  );
}
