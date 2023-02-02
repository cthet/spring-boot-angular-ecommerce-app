import {
  Action,
  combineReducers,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromApparelCategories from './reducers/apparel-categories.reducer';

export const BrandFeatureKey = 'brand';

export interface BrandState { 
  [fromApparelCategories.ApparelCategoriesFeatureKey]: fromApparelCategories.State;
}

export function reducers(state: BrandState | undefined, action: Action) {
  return combineReducers({[fromApparelCategories.ApparelCategoriesFeatureKey]:fromApparelCategories.reducer})(state, action);
}

export const selectBrandState = createFeatureSelector<BrandState>(BrandFeatureKey);