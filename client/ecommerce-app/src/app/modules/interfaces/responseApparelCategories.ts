import { ApparelCategory } from "./models/apparelCategory";

export interface responseApparelCategories{
  gender: string;
  apparel_categories: ApparelCategory[];
}