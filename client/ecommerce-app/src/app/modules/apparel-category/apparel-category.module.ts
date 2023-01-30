import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApparelCategoryPageComponent } from './containers/apparel-category-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApparelCategoryComponent } from './components/apparel-category.component';
import { ApparelCategoryRoutingModule } from './apparel-category-routing.module';
import { ApparelCategoryProductsPageComponent } from './containers/apparel-category-products-page.component';

export const COMPONENTS = [ApparelCategoryComponent];

export const CONTAINERS = [ApparelCategoryPageComponent, ApparelCategoryProductsPageComponent];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    NgbModule,
    MatCheckboxModule,
    ApparelCategoryRoutingModule,
    MatCardModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class ApparelCategoryModule { }
