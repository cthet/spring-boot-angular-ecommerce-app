import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page.component';
import { UserOrdersPageComponent } from './containers/user-orders-page/user-orders-page.component';
import { ProfileComponent } from './components/profile.component';

const routes: Routes = [

{
  path: '',
  component: ProfilePageComponent,
  children: [
    {
      path: '',
      component: ProfileComponent,
    },
    {
      path: 'orders',
      component: UserOrdersPageComponent,
    },
  ],
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
