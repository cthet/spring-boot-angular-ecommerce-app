import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandRoutingModule } from './brand-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrandFeatureKey, reducers } from './store';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { BrandPageComponent } from './containers/brand-page.component';
import { BrandProductsPageComponent } from './containers/brand-products-page.component';
import { BrandComponent } from './components/brand.component';
import { CategoriesEffects } from './store/effects/apparel-categories.effects';
import { TruncatePipe } from 'src/app/utility/pipes/TruncatePipe';
import { MatButtonModule } from '@angular/material/button';


export const COMPONENTS = [BrandComponent];

export const CONTAINERS = [BrandPageComponent, BrandProductsPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS, TruncatePipe],
  imports: [    
    CommonModule,
    NgbModule,
    MatCheckboxModule,
    BrandRoutingModule,
    MatCardModule,
    SharedModule,
    MatButtonModule,
    StoreModule.forFeature(BrandFeatureKey, reducers),
    EffectsModule.forFeature([CategoriesEffects]),
  ]
})
export class BrandModule { }
