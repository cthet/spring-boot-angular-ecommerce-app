import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
import { HomegenderComponent } from './homegender/homegender.component';
import { ReadyToWearComponent } from './ready-to-wear/ready-to-wear.component';
import { SharedModule } from '../shared/shared.module';
import { BrandsComponent } from './brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    GenderComponent,
    HomegenderComponent,
    ReadyToWearComponent,
    BrandsComponent,
    NavbarComponent
  ],
  imports: [CommonModule, GenderRoutingModule],
})
export class GenderModule {}
