import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';
import { setProduct } from '../actions/product.action';

export const ProductFeatureKey = 'product';

export interface State {
  product: Product;
}

export const initialState: State = {
  product: {
    id: 0,
    product_name: '',
    unit_price: 0,
    image_url: '',
    units_in_stock: 0,
    active: false,
    gender_category: '',
    product_category: '',
    brand_category: '',
  },
};

export const reducer = createReducer<State>(
  initialState,

  on(setProduct, (state, { product }) => ({
    ...state,
    product: product,
  }))
);
