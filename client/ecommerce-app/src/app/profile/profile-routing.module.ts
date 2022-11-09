import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './components/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  // { path: 'user', component: UserComponent },
  // { path: 'address', component: AddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
