import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';
import { Brand } from 'src/app/products/models/brand';

@Component({
  selector: 'app-navbar',
  template: `
    <video
      *ngIf="video && brandImageUrl == ''"
      [src]="video"
      type="video/mp4"
      loop
      autoplay
      muted
    ></video>

    <img *ngIf="brand" [src]="brandImageUrl" />

    <nav class="navbar">
      <ul>
        <div class="dropdown-background"></div>
        <li class="brands-dropdown">
          <a [routerLink]="['./marques']"> Marques </a>

          <ul class="brands-dropdown-content">
            <ng-container *ngFor="let brand of brands">
              <li>
                <a
                  [routerLink]="[
                    brand.brand_category | BrandCase | HyphenateCase
                  ]"
                  routerLinkActive="active"
                  (click)="select.emit(brand.id)"
                >
                  {{ brand.brand_category }}
                </a>
              </li>
            </ng-container>
          </ul>
        </li>

        <li class="apparel-categories-dropdown">
          <a [routerLink]="['./pret-a-porter']"> Prêt à porter </a>

          <ul class="apparel-categories-dropdown-content">
            <ng-container *ngFor="let apparelCategory of apparelCategories">
              <li>
                <a
                  [routerLink]="[
                    apparelCategory.apparel_category
                      | ApparelCategoryCase
                      | HyphenateCase
                  ]"
                  routerLinkActive="active"
                  class="item-txt"
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
  @Input() video!: string | null;
  @Input() brand!: Brand | null;
  @Input() brands!: Brand[] | null;
  @Input() apparelCategories!: ApparelCategory[] | null;

  @Output() select = new EventEmitter<number>();

  get brandId() {
    if (this.brand != null) return this.brand.id;
    return;
  }

  get brandImageUrl() {
    if (this.brand != null) return this.brand.image_url;
    return;
  }

  get brandCategory() {
    if (this.brand != null) return this.brand.brand_category;
    return;
  }
}
