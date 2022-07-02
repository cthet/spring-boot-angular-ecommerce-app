package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.ApparelCategoriesDTO;

public interface ApparelCategoryService {
    ApparelCategoriesDTO getApparelCategoriesByGender(int gender);
}
