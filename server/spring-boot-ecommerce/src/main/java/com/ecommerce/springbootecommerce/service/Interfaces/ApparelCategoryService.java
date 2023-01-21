package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDto;

public interface ApparelCategoryService {

  ApparelCategoriesDto getApparelCategoriesByBrandIdAndGenderId(int brand, int gender);

}