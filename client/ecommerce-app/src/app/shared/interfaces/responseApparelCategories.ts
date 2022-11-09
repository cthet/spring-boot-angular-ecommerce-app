import { ApparelCategory } from '../../products/models/apparelCategory';

export interface ResponseApparelCategories {
  gender: string;
  apparel_categories: ApparelCategory[];
}
