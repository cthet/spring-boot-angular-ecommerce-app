package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDto;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDto;
import com.ecommerce.springbootecommerce.repository.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ApparelCategoryServiceImpl implements ApparelCategoryService {
    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;
    @Autowired
    GenderCategoryRepository genderCategoryRepository;
    @Override
    public ApparelCategoriesDto getApparelCategoriesByBrandIdAndGenderId(int gender, int brand) {

        List<ApparelCategory> apparelCategories;

        if (brand==0) {
            apparelCategories = apparelCategoryRepository.findByGenderCategoryId(gender);
        } else {
            apparelCategories = apparelCategoryRepository.findByBrandCategoryIdAndGenderId(brand, gender);
        }

        if (apparelCategories.isEmpty()) {
            throw new ApiRequestException("No Apparel Categories found in database!", HttpStatus.NOT_FOUND);
        }

        ApparelCategoriesDto apparelCategoriesDTO = new ApparelCategoriesDto();

        apparelCategoriesDTO.setGender(genderCategoryRepository.findById(gender)
                .orElseThrow(() -> new ApiRequestException("No gender found in database!", HttpStatus.NOT_FOUND)).getName());


        List<ApparelCategoryDto> apparelCategoryDtos = new ArrayList<ApparelCategoryDto>();

        for (ApparelCategory apparelCategory : apparelCategories) {
            ApparelCategoryDto apparelCategoryDTO = new ApparelCategoryDto();
            apparelCategoryDTO.setId(apparelCategory.getId());
            apparelCategoryDTO.setCategory(apparelCategory.getName());
            apparelCategoryDtos.add(apparelCategoryDTO);
        }

        apparelCategoriesDTO.setApparelCategories(apparelCategoryDtos);

        return apparelCategoriesDTO;
    }

}
