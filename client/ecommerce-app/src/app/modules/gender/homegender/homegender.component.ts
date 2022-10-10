import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

export interface gender {
  gender: string;
}

@Component({
  selector: 'app-homegender',
  templateUrl: './homegender.component.html',
  styleUrls: ['./homegender.component.css'],
})
export class HomegenderComponent implements OnInit {
  gender!: string;
  //urls$: Observable<string[]>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getGender();
    this.getUrl();
  }

  getGender() {
    this.activatedRoute.params.subscribe(
      (item) => (this.gender = item['gender'])
    );
  }

  getUrl() {
    const urls$ = new Observable((subscriber) => {
      if (this.gender == 'homme') {
        subscriber.next(
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg'
        );
        subscriber.next(
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/DESKTOP_2X_20221004094145.jpg'
        );
      } else {
        subscriber.next(
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/d0c53a9f01a948849467309582c85dce.jpg'
        );
        subscriber.next(
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/landingpage/landingpage/DESKTOP_2X_20221004094145.jpg'
        );
      }
    });
  }

}
