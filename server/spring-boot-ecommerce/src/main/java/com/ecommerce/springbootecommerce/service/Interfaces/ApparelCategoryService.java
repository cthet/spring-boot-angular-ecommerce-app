package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;

public interface ApparelCategoryService {

  ApparelCategoriesResponse getApparelCategoriesByBrandIdAndGenderId(int brandId, int genderId);

}