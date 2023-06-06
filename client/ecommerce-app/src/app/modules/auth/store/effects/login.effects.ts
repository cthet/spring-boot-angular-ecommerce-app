import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, concatMap, tap} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/AuthResponse';
import { loginActions, loginApiActions, signupActions } from '../actions';
import { authActions, cartActions } from '../../../../store/actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.login),
      concatMap((action) =>
        this.authService
          .login(action.credentials)
          .pipe(
            map((authResponse: AuthResponse) =>
              loginApiActions.loginSuccess({ authResponse: authResponse })
            ),
            catchError((error) =>
              of(loginApiActions.loginFailure({ error: error.message }))
            )
          )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginApiActions.loginSuccess),
        tap((action) => {
          this.localStorageService.saveToken(action.authResponse.token);  
          this.localStorageService.saveUser(action.authResponse.user);
        }),        
        concatMap(action => of(
         authActions.authSuccess({ authResponse: action.authResponse}),
         cartActions.loadCart(),
         signupActions.clearSignupEmail())),
      tap(() => this.router.navigate(['/profile'])),
  )
  )
}
