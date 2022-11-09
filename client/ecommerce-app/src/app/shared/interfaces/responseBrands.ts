import { Brand } from '../../products/models/brand';

export interface ResponseBrands {
  gender: string;
  brand_categories: Brand[];
}
