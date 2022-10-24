import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadApparelCategoriesByGenderIdAndBrandId } from '../products-category/store/product-category.action';
import {
  loadBrandByGenderIdAndBrandId,
  loadProductsByGenderIdAndBrandIdAndCategoryId,
  RemoveBrand,
} from '../products-list/store/product-list.action';
import { selectBrand } from '../products-list/store/product-list.selector';
import {
  loadApparelCategoriesBygenderId,
  loadBrandsByGenderId,
  setVideo,
} from './store/navbar.actions';
import {
  selectAllApparelCategories,
  selectAllBrand,
  selectHomeVideo,
} from './store/navbar.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  genderId!: number;
  video$ = this.store.select(selectHomeVideo);
  brand$ = this.store.select(selectBrand);
  brands$ = this.store.select(selectAllBrand);
  apparelCategories$ = this.store.select(selectAllApparelCategories);

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((item) => {
      if (item['gender'] == 'homme') this.fetchMenDatas();
      else this.fetchWomenDatas();
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'].includes('/homme')) this.fetchMenDatas();
        else this.fetchWomenDatas();
      }
    });
  }

  fetchMenDatas() {
    this.genderId = 1;
    this.store.dispatch(loadBrandsByGenderId({ genderId: 1 }));
    this.store.dispatch(loadApparelCategoriesBygenderId({ genderId: 1 }));
    this.store.dispatch(
      setVideo({
        video:
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_h_1900x851_fr-1080.mp4',
      })
    );
    this.store.dispatch(RemoveBrand());
  }

  fetchWomenDatas() {
    this.genderId = 2;
    this.store.dispatch(loadBrandsByGenderId({ genderId: 2 }));
    this.store.dispatch(loadApparelCategoriesBygenderId({ genderId: 2 }));
    this.store.dispatch(
      setVideo({
        video:
          'https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/videos/btw_window_f_1900x851_fr-1080.mp4',
      })
    );
    this.store.dispatch(RemoveBrand());
  }

  fetchBrandDatas(brandId: number) {
    this.store.dispatch(
      loadBrandByGenderIdAndBrandId({
        genderId: this.genderId,
        brandId: brandId,
      })
    );
    this.store.dispatch(
      loadApparelCategoriesByGenderIdAndBrandId({
        genderId: this.genderId,
        brandId: brandId,
      })
    );
    this.store.dispatch(
      loadProductsByGenderIdAndBrandIdAndCategoryId({
        genderId: this.genderId,
        categoryId: 0,
        brandId: brandId,

      })
    );
  }
}
