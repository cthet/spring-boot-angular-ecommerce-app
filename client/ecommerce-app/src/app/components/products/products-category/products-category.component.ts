import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { ApparelCategory } from 'src/app/models/apparelCategory';
import { PriceRangeCategory } from 'src/app/models/priceRangeCategory';
import { CategoriesService } from 'src/app/services/categories.service';

export interface responseApparels {
  gender: string;
  apparel_categories: ApparelCategory[];
}
export interface responsePriceRange {
  price_range_categories: PriceRangeCategory[];
}
@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  private apparels: Subscription = new Subscription();
  private priceRange: Subscription = new Subscription();
  gender!: string;
  apparels_categories!: ApparelCategory[];
  priceRange_categories!: PriceRangeCategory[];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchApparelCategories();
    this.fetchPriceRangeCategories();
  }

  fetchApparelCategories(): void {
    this.route.params.subscribe((params) => {
      const gender: string = params['gender'];
      //Object Literal lookups
      const getgenderId = (gender: string) =>
        ({
          men: 1,
          women: 2,
        }[gender]);

      const genderId = getgenderId(gender);
      const param = {
        gender: genderId,
      };
      this.apparels = this.categoriesService
        .fetchApparelCategories(param)
        .subscribe((response: responseApparels) => {
          this.gender = response.gender;
          this.apparels_categories = response.apparel_categories;
        });
    });
  }

  fetchPriceRangeCategories(): void {
    this.priceRange = this.categoriesService
      .fetchPriceRangeCategories()
      .subscribe((response: responsePriceRange) => {
        this.priceRange_categories = response.price_range_categories;
        console.log(response);
      });
  }

  ngOnDestroy(): void {
    this.apparels.unsubscribe();
    this.priceRange.unsubscribe();
  }
}
