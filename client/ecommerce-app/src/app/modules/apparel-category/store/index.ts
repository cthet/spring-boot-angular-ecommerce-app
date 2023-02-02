import {
  Action,
  combineReducers,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromBrandCategories from './reducers/brand-categories.reducer';

export const ApparelCategoryFeatureKey = 'apparelCategory';

export interface ApparelCategoryState { 
  [fromBrandCategories.BrandCategoriesFeatureKey]: fromBrandCategories.State;
}

export function reducers(state: ApparelCategoryState | undefined, action: Action) {
  return combineReducers({[fromBrandCategories.BrandCategoriesFeatureKey]:fromBrandCategories.reducer})(state, action);
}

export const selectApparelCategoryState = createFeatureSelector<ApparelCategoryState>(ApparelCategoryFeatureKey);