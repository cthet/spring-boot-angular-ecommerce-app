import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="container pt-4 pb-4">
  <div class="row">
    <div class="col-sm-4 mx-auto">
      <mat-card class="pt-4">
        <div class="title">Edit your profile</div>
        <hr />
        <mat-card-content class="pt-4 pb-4 mx-auto">
          <div class="pb-4">
            <a routerLink="/profile/user">
              <button mat-raised-button color="warn">
                Update your personal information
              </button>
            </a>
          </div>
          <div class="pb-4">
            <a routerLink="/profile/address">
              <button mat-raised-button color="warn">
                Add a shipping address
              </button>
            </a>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>`,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
