import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
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
  private routes: Subscription = new Subscription();
  private apparels: Subscription = new Subscription();
  private priceRange: Subscription = new Subscription();
  gender!: string;
  apparels_categories$: Observable<ApparelCategory[]> = new Observable();
  priceRange_categories!: PriceRangeCategory[];
  apparelCategoryId!: number;
  priceRangeCategoryId!: number;
  check: boolean = false;

  @Output() apparelsCategory = new EventEmitter<number>();

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchApparelCategories();
    this.fetchPriceRangeCategories();
  }

  fetchApparelCategories(): void {
    this.routes = this.route.params.subscribe((params) => {
      this.check = false;
      this.apparelsCategory.emit(0);
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
          this.apparels_categories$ = of(response.apparel_categories);
        });
    });
  }

  fetchPriceRangeCategories(): void {
    this.priceRange = this.categoriesService
      .fetchPriceRangeCategories()
      .subscribe((response: responsePriceRange) => {
        this.priceRange_categories = response.price_range_categories;
      });
  }

  apparelsChanged(apparelsId: number): void {
    this.check = false;
    this.apparelsCategory.emit(apparelsId);
  }

  ngOnDestroy(): void {
    this.routes.unsubscribe();
    this.apparels.unsubscribe();
    this.priceRange.unsubscribe();
  }
}
