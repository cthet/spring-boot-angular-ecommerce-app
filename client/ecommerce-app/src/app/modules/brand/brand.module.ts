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
import { MatButtonModule } from '@angular/material/button';
import { BrandCategoriesEffects} from './store/effects/apparel-categories.effects';
import { TruncatePipe } from '../../utility/pipes/TruncatePipe';
import { ProductsCategoryComponent } from './components/products-category.component';
import { MatExpansionModule } from '@angular/material/expansion';


export const COMPONENTS = [BrandComponent, ProductsCategoryComponent];

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
    MatExpansionModule,
    StoreModule.forFeature(BrandFeatureKey, reducers),
    EffectsModule.forFeature([BrandCategoriesEffects]),
  ]
})
export class BrandModule { }
