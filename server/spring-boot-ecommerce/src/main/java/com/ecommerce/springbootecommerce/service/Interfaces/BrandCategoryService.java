package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDto;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDto;

public interface BrandCategoryService {

    BrandCategoriesDto getBrandCategoriesByGenderId(int gender);

    BrandCategoryDto getBrandCategoryByIdAndGenderId(int id, int gender);
}
