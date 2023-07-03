package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;

public interface ApparelCategoryService {

  ApparelCategoriesResponse getApparelCategoriesByGenderIdAndBranCategoryId(int genderId, int brandId);

}