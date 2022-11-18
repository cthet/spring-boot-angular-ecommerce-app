import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gender } from 'src/app/core/models/gender';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { Brand } from 'src/app/products/models/brand';

@Component({
  selector: 'app-navbar',
  template: `
    <video
      *ngIf="video_url && image_url == ''"
      [src]="video_url"
      type="video/mp4"
      loop
      autoplay
      muted
    ></video>

    <img *ngIf="image_url" [src]="image_url" />

    <nav class="navbar">
      <ul>
        <div class="dropdown-background"></div>
        <li class="brands-dropdown">
          <a > Marques </a>

          <ul class="brands-dropdown-content">
            <ng-container *ngFor="let brand of brands">
              <li>
                <a                 

                  (click)="select.emit(brand.id)"
                >
                  {{ brand.brand_category }}
                </a>
              </li>
            </ng-container>
          </ul>
        </li>

        <li class="apparel-categories-dropdown">
          <a > Prêt à porter </a>

          <ul class="apparel-categories-dropdown-content">
            <ng-container *ngFor="let apparelCategory of apparelCategories">
              <li>
                <a
                >
                  {{ apparelCategory.apparel_category }}
                </a>
              </li>
            </ng-container>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() gender!: Gender | null;
  @Input() video_url!: string | null;
  @Input() image_url!: string | null;
  @Input() brands!: Brand[] | null;
  @Input() apparelCategories!: ApparelCategory[] | null;


  @Output() select = new EventEmitter<number>();

  get genderType() {
    if (this.gender != null) return this.gender.type;
    return;
  }

  // get brandId() {
  //   if (this.brand != null) return this.brand.id;
  //   return;
  // }

  // get brandImageUrl() {
  //   if (this.brand != null) return this.brand.image_url;
  //   return;
  // }

  // get brandCategory() {
  //   if (this.brand != null) return this.brand.brand_category;
  //   return;
  // }

//   routerLink="[
//     apparelCategory.apparel_category
//       | ApparelCategoryCase
//       | HyphenateCase
//   ]"
//   routerLinkActive="active"
   

//   routerLink="[genderType/pret-a-porter]"
//   routerLink="../genderType/marques"

//   routerLink="
//   /genderType/brand.brand_category | BrandCase | HyphenateCase
// "
// routerLinkActive="active" 
}
