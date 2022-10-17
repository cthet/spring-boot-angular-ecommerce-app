import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadApparelCategoriesBygenderId } from '../apparel-categories/store/apparel-categories.actions';
import { selectAllApparelCategories } from '../apparel-categories/store/apparel-categories.selector';
import { loadBrands } from '../brands/store/brands.actions';
import { selectAllBrand } from '../brands/store/brands.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  brands$ = this.store.select(selectAllBrand);
  apparelCategories$ = this.store.select(selectAllApparelCategories);

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((item) => {
      if (item['gender'] == 'homme') {
        this.store.dispatch(loadBrands({id:1}));
        this.store.dispatch(loadApparelCategoriesBygenderId({genderId:1}));
      }
      if (item['gender'] == 'femme') {
        this.store.dispatch(loadBrands({id:2}));
        this.store.dispatch(loadApparelCategoriesBygenderId({genderId:2}));
      }
    });
  }  
}
