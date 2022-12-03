import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductPageComponent } from "../../shared/containers/product-page.component";
import { BrandPageComponent } from "./containers/brand-page.component";

const routes: Routes = [
  {
    path: '',
    component: BrandPageComponent,  
  },
  {
    path: ':category/:product/:id',
    component: ProductPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandRoutingModule {}