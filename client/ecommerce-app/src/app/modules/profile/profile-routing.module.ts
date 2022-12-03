import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent}
]


  // { path: 'user', component: UserComponent },
  // { path: 'address', component: AddressComponent },


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
