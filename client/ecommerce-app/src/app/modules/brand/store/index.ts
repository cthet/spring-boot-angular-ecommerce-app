import {
  Action,
  combineReducers,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromApprelCategories from './reducers/apparel-categories.reducer';

export const BrandFeatureKey = 'brand';

export interface BrandState { 
  [fromApprelCategories.ApparelCategoriesFeatureKey]: fromApprelCategories.State;
}

export function reducers(state: BrandState | undefined, action: Action) {
  return combineReducers({[fromApprelCategories.ApparelCategoriesFeatureKey]:fromApprelCategories.reducer})(state, action);
}

export const selectBrandState = createFeatureSelector<BrandState>(BrandFeatureKey);