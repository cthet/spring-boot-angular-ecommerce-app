import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable } from 'rxjs';
import { Brand } from '../../models/Brand';
import { brandsSelectors } from '../../store/selectors';

@Injectable({ providedIn: 'root' })
export class BrandGuard implements CanActivate {
  brands$: Observable<Brand[]>;
  brand$: Observable<Brand | null>;

  constructor(private store: Store<Store>) {
    this.brand$ = this.store.select(brandsSelectors.selectBrand);
    this.brands$ = this.store.select(brandsSelectors.selectBrands);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
   
          let brandFromUrl = () => {
              let url = state.url.split('/');
              while(url[2].includes('-')){
              url[2] = url[2].replace('-', ' ');
            } 
            return url[2];
          }

          const isbrandFromUrlInStore =  this.brands$.pipe(
            map(brands => brands.filter(brand => brandFromUrl() === brand.brand_category ).length > 0? true : false));

          return isbrandFromUrlInStore.pipe(
              mergeMap( isbrandInStore => 
              this.brand$.pipe(
                map(brand => brandFromUrl() == brand?.brand_category)).pipe(
                map(isbrandInToken => isbrandInStore || isbrandInToken)),
              ),
          )
        }
    }             
  

