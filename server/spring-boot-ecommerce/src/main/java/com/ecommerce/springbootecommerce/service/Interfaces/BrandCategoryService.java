package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesResponse;

public interface BrandCategoryService {

    BrandCategoriesResponse getBrandCategoriesByGenderId(int genderId, int apparelCategoryId);

}
