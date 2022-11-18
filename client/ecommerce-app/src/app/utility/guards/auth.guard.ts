import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/auth/interfaces/User';
import * as fromAuth from '../../auth/reducers'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<Store>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(fromAuth.selectUser).pipe(
      take(1),
      map((user: User | null) => {
        if (user == null) {
          return this.router.createUrlTree(['/connexion']);
        }
        return route.params[''];
      })
    );
  }
}
