import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setHomeImages } from '../actions/home.actions';
import * as fromProducts from '../reducers'

@Component({
  selector: 'app-homegender',
  template: `
    <app-home-details
      [headerImage]="headerImage$ | async"
      [footerImage]="footerImage$ | async"
    >
    </app-home-details>
  `,
})
export class HomePageComponent implements OnInit {
  headerImage$: Observable<string>;
  footerImage$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<Store>
  ) {
    this.headerImage$ = this.store.select(fromProducts.selectheaderHomeImage);
    this.footerImage$ = this.store.select(fromProducts.selectfooterHomeImage);
  }

  ngOnInit(): void {
    this.route.params.subscribe((item) => {
      if (item['gender'] == 'femme') {
        this.store.dispatch(
          setHomeImages({
            headerImage:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/Big_desktop-exquisite-gucci_2x_20220930164026.jpg',
            footerImage:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/Big_desktop-exquisite-gucci_2x_20220930164026.jpg',
          })
        );
      } else {
        this.store.dispatch(
          setHomeImages({
            headerImage:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg',
            footerImage:
              'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg',
          })
        );
      }
    });
  }
}
