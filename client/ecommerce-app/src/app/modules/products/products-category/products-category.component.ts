import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectApparelCategories } from './store/product-category.selector';

// export interface responseApparels {
//   gender: string;
//   apparel_categories: ApparelCategory[];
// }
// export interface responsePriceRange {
//   price_range_categories: PriceRangeCategory[];
// }
@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent implements OnInit {
  apparelcategories$ = this.store.select(selectApparelCategories);

  // private routes: Subscription = new Subscription();
  // private apparels: Subscription = new Subscription();
  // private priceRange: Subscription = new Subscription();
  // gender!: string;
  // apparels_categories$: Observable<ApparelCategory[]> = new Observable();
  // priceRange_categories!: PriceRangeCategory[];
  // apparelCategoryId!: number;
  // priceRangeCategoryId!: number;
  // check: boolean = false;

  // @Output() apparelsCategory = new EventEmitter<number>();
  // @Output() priceRangeCategory = new EventEmitter<number>();
  // @Output() genderCategory = new EventEmitter<number>();

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.fetchApparelCategories();
    // this.fetchPriceRangeCategories();
  }

  // fetchApparelCategories(): void {
  //   this.routes = this.route.params.subscribe((params) => {
  //     this.gender = params['gender'];
  //     //Object Literal lookups
  //     const getgenderId = (gender: string) =>
  //       ({
  //         men: 1,
  //         women: 2,
  //       }[gender]);
  //     const genderId = getgenderId(this.gender);
  //     this.genderCategory.emit(genderId);

  //     this.check = false;
  //     this.apparelsCategory.emit(9);

  //     this.apparels = this.categoriesService
  //       .fetchApparelCategories({ gender: genderId })
  //       .subscribe((response: responseApparels) => {
  //         this.apparels_categories$ = of(response.apparel_categories);
  //       });
  //   });
  // }

  // fetchPriceRangeCategories(): void {
  //   this.priceRange = this.categoriesService
  //     .fetchPriceRangeCategories()
  //     .subscribe((response: responsePriceRange) => {
  //       this.priceRange_categories = response.price_range_categories;
  //     });
  // }

  // apparelsChanged(apparelsId: number): void {
  //   this.apparelsCategory.emit(apparelsId);
  // }

  // priceRangeChanged(priceRangeId: number): void {
  //   this.priceRangeCategory.emit(priceRangeId);
  // }

  // ngOnDestroy(): void {
  //   this.routes.unsubscribe();
  //   this.apparels.unsubscribe();
  //   this.priceRange.unsubscribe();
  // }
}
