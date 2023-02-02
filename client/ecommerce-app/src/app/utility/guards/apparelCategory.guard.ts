import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable } from 'rxjs';
import { ApparelCategory } from '../../models/ApparelCategory';
import { apparelCategoriesSelectors } from '../../store/selectors';

@Injectable({ providedIn: 'root' })
export class ApparelCategoryGuard implements CanActivate {
  apparelCategories$: Observable<ApparelCategory[]>;
  apparelCategory$: Observable<ApparelCategory | null>;

  constructor(private store: Store<Store>) {
    this.apparelCategory$ = this.store.select(apparelCategoriesSelectors.selectApparelCategory);
    this.apparelCategories$ = this.store.select(apparelCategoriesSelectors.selectApparelCategories);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
   
      //get apparel category from url

          let apparelCategoryFromUrl = () => {
              let url = state.url.split('/');            
            return url[3];
          }          

      //check if apparel category from url is present in list of apparel-categories in ngrx store    

          const isApparelCategoryFromUrlInStore = this.apparelCategories$.pipe(
            map(apparelCategories => 
              apparelCategories.filter(apparelCategory => 
                apparelCategoryFromUrl() === apparelCategory.apparel_category).length > 0? true : false));

       //check if apparel category from url

          return isApparelCategoryFromUrlInStore.pipe(
              mergeMap( isapparelCategoryInStore => 
              this.apparelCategory$.pipe(
                map(apparelCategory => apparelCategoryFromUrl() == apparelCategory?.apparel_category)).pipe(
                map(isapparelCategoryInToken => isapparelCategoryInStore || isapparelCategoryInToken)),
              ),
          )
        }
    }             
  

