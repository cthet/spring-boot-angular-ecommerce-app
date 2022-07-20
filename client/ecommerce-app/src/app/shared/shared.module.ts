import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { UserComponent } from '../components/profile/user/user.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [AlertComponent],
})
export class SharedModule {}
