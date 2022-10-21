import { ApparelCategory } from "./models/apparelCategory";

export interface ResponseApparelCategories{
  gender: string;
  apparel_categories: ApparelCategory[];
}