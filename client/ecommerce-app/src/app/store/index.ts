import * as fromGender from './reducers/gender.reducer';
import * as fromCart from './reducers/cart.reducer';
import * as fromAuth from './reducers/auth-reducer';
import * as fromBrands from './reducers/brands.reducer';
import * as fromApparelCategories from './reducers/apparel-categories.reducer';
import * as fromImage from './reducers/image.reducer';
import * as fromVideo from './reducers/video.reducer';
import * as fromProducts from './reducers/products.reducer';
import * as fromProduct from './reducers/product.reducer';
import * as fromOrder from './reducers/order.reducer';

import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { InjectionToken } from '@angular/core';

export const AppFeatureKey = 'app';

export interface AppState {
  [fromGender.GenderFeatureKey]: fromGender.State;
  [fromCart.cartFeaturesKey]: fromCart.State;
  [fromAuth.UserFeatureKey]: fromAuth.State,
  [fromBrands.BrandsFeatureKey]: fromBrands.State;
  [fromApparelCategories.ApparelCategoriesFeatureKey]: fromApparelCategories.State;
  [fromImage.ImageFeatureKey]: fromImage.State;
  [fromVideo.VideoFeatureKey]: fromVideo.State;  
  [fromProducts.ProductsFeatureKey]: fromProducts.State; 
  [fromProduct.ProductFeatureKey]: fromProduct.State; 
  [fromOrder.orderFeaturesKey]: fromOrder.State; 
}

export const reducers = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromGender.GenderFeatureKey]: fromGender.reducer,
    [fromCart.cartFeaturesKey]: fromCart.reducer,
    [fromAuth.UserFeatureKey]: fromAuth.reducer,
    [fromBrands.BrandsFeatureKey]: fromBrands.reducer,
    [fromApparelCategories.ApparelCategoriesFeatureKey]:fromApparelCategories.reducer,
    [fromImage.ImageFeatureKey]: fromImage.reducer,
    [fromVideo.VideoFeatureKey]: fromVideo.reducer,
    [fromProducts.ProductsFeatureKey]: fromProducts.reducer,
    [fromProduct.ProductFeatureKey]: fromProduct.reducer,
    [fromOrder.orderFeaturesKey]: fromOrder.reducer 
  }),
});

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };

}
