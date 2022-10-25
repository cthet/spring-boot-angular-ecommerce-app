import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/modules/interfaces/models/product';


export const loadProductsByBrandIdAndCategoryId = createAction(
  '[Products] Load ApparelCategories',
  props<{ brandId: number; categoryId: number }>()
);

export const loadProductsByBrandIdAndCategoryIdSuccess =
  createAction(
    '[Products] Load ApparelCategories Success',
    props<{ products: Product[] }>()
  );

export const loadProductsByBrandIdAndCategoryIdFailure =
  createAction(
    '[Products] Load ApparelCategories Failure',
    props<{ error: string }>()
  );


