import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setHomeImages } from '../home/store/home.actions';
import {
  selectfooterHomeImage,
  selectheaderHomeImage,
} from '../home/store/home.selector';

@Component({
  selector: 'app-homegender',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  headerImage$ = this.store.select(selectheaderHomeImage);
  footerImage$ = this.store.select(selectfooterHomeImage);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

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

//   this.gender = item['gender'];

//   if (this.gender == 'femme') {
//     this.images$ = of(
//       'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg'
//     );
//   } else {
//     this.images$ = of(
//       'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg'
//     );
//   }
// }
