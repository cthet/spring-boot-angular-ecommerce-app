import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './components/home.components';
import { HomePageComponent } from './containers/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeFeatureKey, reducers } from './store';
import { ImagesEffects } from './store/effects/images.effects';
import { NewProductsEffects } from './store/effects/newProducts.effects';
import { CarouselModule } from 'ngx-owl-carousel-o';

export const COMPONENTS = [
  HomeComponent,
];

export const CONTAINERS = [
  HomePageComponent,
];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CarouselModule,
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(HomeFeatureKey, reducers),
    EffectsModule.forFeature([ImagesEffects, NewProductsEffects]),  
  ]
})
export class HomeModule { }
