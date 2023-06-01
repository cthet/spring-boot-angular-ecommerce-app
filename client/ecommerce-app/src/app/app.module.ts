import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './store';
import { AppRoutingModule } from './app-routing.module';
import { ApparelCategoriesEffects } from './store/effects/apparel-categories.effects';
import { BrandsEffects } from './store/effects/brands.effects';
import { ImageEffects } from './store/effects/image.effects';
import { ProductsEffects } from './store/effects/products.effects';
import { VideoEffects } from './store/effects/video.effects';
import { AppComponent } from './core/containers/core.component';
import { GenderEffects } from './store/effects/gender-effects';
import { CartEffects } from './store/effects/cart.effects';
import { authInterceptorProviders } from './utility/interceptors/auth-interceptor';
import { ProductEffects } from './store/effects/product.effects';
import { OrderEffects } from './store/effects/order.effects';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,    
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictStateSerializability: true,
      strictActionSerializability: true,
      strictActionWithinNgZone: true,
      strictActionTypeUniqueness: true,
    },
  }),
    EffectsModule.forRoot([AuthEffects, GenderEffects, CartEffects, ApparelCategoriesEffects, BrandsEffects, ImageEffects, ProductsEffects, ProductEffects, VideoEffects, OrderEffects]), 
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
