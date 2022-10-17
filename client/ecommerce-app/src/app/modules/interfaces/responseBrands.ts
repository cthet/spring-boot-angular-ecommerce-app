import { Brand } from "./models/brand";

export interface ResponseBrands {
  gender: string;
  brand_categories: Brand[];
}