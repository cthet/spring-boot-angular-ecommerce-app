package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriesImpl {

    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;

    @Autowired
    GenderCategoryRepository genderCategoryRepository;

    @Autowired
    PriceRangeCategoryRepository priceRangeCategoryRepository;

    
    public CategoriesService getAllCategories() {




        return categoriesService;
    }
}
