package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.web.dto.ApparelCategoriesDTO;

public interface ApparelCategoryService {
    ApparelCategoriesDTO getApparelCategoriesByGender(int gender);
}
