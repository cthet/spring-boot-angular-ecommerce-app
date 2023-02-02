import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApparelCategoryPageComponent } from './containers/apparel-category-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApparelCategoryRoutingModule } from './apparel-category-routing.module';
import { ApparelCategoryProductsPageComponent } from './containers/apparel-category-products-page.component';
import { ApparelCategoryFeatureKey, reducers } from './store';
import { BrandCategoriesEffects } from './store/effects/brand-categories.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrandsCategoryComponent } from './components/brands-category.component';
import {MatRadioModule} from '@angular/material/radio'; 
import { ProductsCategoryComponent } from './components/products-category.component';
import { SharedModule } from "../../shared/shared.module";

export const COMPONENTS = [BrandsCategoryComponent, ProductsCategoryComponent];

export const CONTAINERS = [ApparelCategoryPageComponent, ApparelCategoryProductsPageComponent];

@NgModule({
    declarations: [COMPONENTS, CONTAINERS],
    imports: [
        CommonModule,
        NgbModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatRadioModule,
        ApparelCategoryRoutingModule,
        MatCardModule,
        MatButtonModule,
        SharedModule,
        StoreModule.forFeature(ApparelCategoryFeatureKey, reducers),
        EffectsModule.forFeature([BrandCategoriesEffects]),
    ]
})
export class ApparelCategoryModule { }
