import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'products/:gender', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
