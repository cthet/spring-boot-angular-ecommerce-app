package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDTO;

public interface ApparelCategoryService {

  ApparelCategoriesDTO getApparelCategoriesByBrandIdAndGenderId(int brand, int gender);

}