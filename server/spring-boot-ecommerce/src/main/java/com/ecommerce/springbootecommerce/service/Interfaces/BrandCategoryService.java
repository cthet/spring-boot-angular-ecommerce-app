package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDTO;

public interface BrandCategoryService {

    BrandCategoriesDTO getBrandCategoriesByGenderId(int gender);

    BrandCategoryDTO getBrandCategoryByIdAndGenderId(int id, int gender);
}
