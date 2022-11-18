import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, concatMap, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import * as AuthActions from '../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthResponse } from '../interfaces/AuthResponse';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login, AuthActions.signupSuccess),
      concatMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((authResponse: AuthResponse) =>
            AuthActions.loginSuccess({ authResponse: authResponse })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error: error })))
        )
      )
    )
  );

  continueSignup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.setSignupEmail),
        tap(() => this.router.navigate(['connexion/signup']))
      ),
    { dispatch: false }
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) =>
          this.tokenStorageService.saveToken(action.authResponse.token)),
        tap((action) =>
          this.tokenStorageService.saveUser(action.authResponse.user)),
        map(() => AuthActions.clearError()),
        map(() => AuthActions.clearSignupEmail()),
        tap(() => this.router.navigate(['/profil']))
      ),
    { dispatch: false }
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      concatMap((action) =>
        this.authService
          .signup(
            action.firstName,
            action.lastName,
            action.email,
            action.password
          )
          .pipe(
            map(() =>
              AuthActions.signupSuccess({
                email: action.email,
                password: action.password,
              })
            ),
            catchError((error) =>
              of(AuthActions.signupFailure({ error: error }))
            )
          )
      )
    )
  );
}
