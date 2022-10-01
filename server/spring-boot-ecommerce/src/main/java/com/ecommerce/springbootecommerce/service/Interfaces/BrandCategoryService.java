package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDTO;

public interface BrandCategoryService {

    BrandCategoriesDTO getBrandCategoriesByGender(int gender);
}
