import * as fromImages from './reducers/images.reducer';
import * as fromNewProducts from './reducers/newProducts.reducer';
import {
  Action,
  combineReducers,
  createFeatureSelector,
} from '@ngrx/store';

export const HomeFeatureKey = 'home';

export interface HomeState {
  [fromImages.ImageFeatureKey]: fromImages.State;
  [fromNewProducts.NewProductsFeatureKey]: fromNewProducts.State;
}

export function reducers(state: HomeState | undefined, action: Action) {
  return combineReducers({
    [fromImages.ImageFeatureKey]: fromImages.reducer,
    [fromNewProducts.NewProductsFeatureKey]: fromNewProducts.reducer,
  })(state, action);
}

export const selectHomeState = createFeatureSelector<HomeState>(HomeFeatureKey);