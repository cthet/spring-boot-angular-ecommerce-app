import { createAction, props } from '@ngrx/store';
import { Brand } from 'src/app/modules/interfaces/models/brand';
import { Product } from 'src/app/modules/interfaces/models/product';

export const loadBrandByGenderIdAndBrandId = createAction(
  '[Products Component] Load Brand',
  props<{ genderId: number; brandId: number }>()
);

export const loadBrandByGenderIdAndBrandIdSuccess = createAction(
  '[Products Component] Load Brand Success',
  props<{ brand: Brand }>()
);

export const loadBrandByGenderIdAndBrandIdFailure = createAction(
  '[Products Component] Load Brand Failure',
  props<{ error: string }>()
);

export const RemoveBrand = createAction('[Products Image] Remove Brand', props);


export const loadProductsByGenderIdAndBrandIdAndCategoryId = createAction(
  '[Products Component] Load ApparelCategories',
  props<{ genderId: number; brandId: number; categoryId: number }>()
);

export const loadProductsByGenderIdAndBrandIdAndCategoryIdSuccess =
  createAction(
    '[Products Component] Load ApparelCategories Success',
    props<{ products: Product[] }>()
  );

export const loadProductsByGenderIdAndBrandIdAndCategoryIdFailure =
  createAction(
    '[Products Component] Load ApparelCategories Failure',
    props<{ error: string }>()
  );

export const RemoveProductsByGenderIdAndBrandIdAndCategoryId = createAction(
  '[Products Component] Load ApparelCategories',
  props<{ genderId: number; brandId: number; categoryId: number }>()
);
