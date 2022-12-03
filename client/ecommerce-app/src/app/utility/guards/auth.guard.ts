import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../../modules/auth/interfaces/User';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return of(this.localStorageService.getUser()).pipe(
      take(1)).pipe(
      map((user: User | null) => {
        if (user == null) {
          return this.router.createUrlTree(['/connexion']);
        }
        return route.params[''];
      })    
      )}
}
