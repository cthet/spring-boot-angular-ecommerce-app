import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ApparelCategory } from '../../models/ApparelCategory';
import { Brand } from '../../models/Brand';

@Component({
  selector: 'app-navbar',
  template: `
    <video
      *ngIf="video_url != null && image_url == null"
      [src]="video_url"
      type="video/mp4"
      loop
      autoplay
      muted
    ></video>

    <img *ngIf="image_url != null" [src]="image_url" />

    <nav class="navbar">
      <ul>          
        <div class="dropdown-background"></div>
        <div class="row">
                <li class="brands-dropdown col-6">
                  <a > Marques </a>
                  <ul class="brands-dropdown-content">
                    <ng-container *ngFor="let brand of brands">
                      <li>
                        <a (click)="selectBrand.emit(brand)"
                        >
                          {{ brand.brand_category }}
                        </a>
                      </li>
                    </ng-container>
                  </ul>
                </li>

                <li class="apparel-categories-dropdown col-6">
                  <a> Prêt à porter </a>
                  <ul class="apparel-categories-dropdown-content">
                    <ng-container *ngFor="let apparelCategory of apparelCategories">
                      <li>
                        <a (click)="selectApparelCategory.emit(apparelCategory)"
                        >
                          {{ apparelCategory.apparel_category }}
                        </a>
                      </li>
                    </ng-container>
                  </ul>
                </li>
              </div>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() video_url!: string | null;
  @Input() image_url!: string | null;
  @Input() brands!: Brand[] | null;
  @Input() apparelCategories!: ApparelCategory[] | null;

  @Output() selectBrand = new EventEmitter<Brand>();
  @Output() selectApparelCategory = new EventEmitter<ApparelCategory>();

}
