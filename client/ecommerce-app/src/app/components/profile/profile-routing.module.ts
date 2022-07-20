import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: 'profile/user', component: UserComponent },
  { path: 'profile/address', component: AddressComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
