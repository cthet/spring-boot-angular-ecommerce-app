import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-home-details',
  template: `
  <div class="home-container">
    <div class="container">
      <div class="header-img-block">
        <img [src]="headerImage" alt="headerImage"/>
      </div>

      <div *ngIf=newProducts class="new-products">      
        <h1 class="new-title">Nouveautés</h1>


            <owl-carousel-o [options]="customOptions">
              <ng-container *ngFor="let product of newProducts">
                <ng-template carouselSlide [id]="'product.id'">
                <a routerLink="/{{ product.gender_category }}/{{
                product.brand_category | HyphenateCase
              }}/{{ product.product_category | HyphenateCase }}/{{
                product.product_name | HyphenateCase
              }}/{{product.id}}">
                  <img [src]="product.image_url" [alt]="product.product_name"/>
                </a>
                </ng-template>
              </ng-container>
            </owl-carousel-o>

      </div>

      <div class="footer-img-block">
        <img [src]="footerImage" alt="footerImage"/>
      </div>

    </div>
  </div>
  `,
  styleUrls: [`./home.component.css`],
})
export class HomeComponent {
  @Input() headerImage: string | null = '';
  @Input() footerImage: string | null = '';
  @Input() newProducts: Product[] | null = [];
  

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
