package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.domain.GenderCategory;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDto;
import com.ecommerce.springbootecommerce.mappers.ApparelCategoryMapper;
import com.ecommerce.springbootecommerce.repository.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ApparelCategoryServiceImpl implements ApparelCategoryService {

    private final ApparelCategoryRepository apparelCategoryRepository;
    private final GenderCategoryRepository genderCategoryRepository;
    private final ApparelCategoryMapper apparelCategoryMapper;

    @Override
    public ApparelCategoriesResponse getApparelCategoriesByBrandIdAndGenderId(int brand, int gender) {

        ApparelCategoriesResponse apparelCategoriesResponse = new ApparelCategoriesResponse();

        GenderCategory _gender = genderCategoryRepository.findById(gender)
                .orElseThrow(() -> new ApiRequestException("Gender not found in database!", HttpStatus.NOT_FOUND));
        apparelCategoriesResponse.setGender(_gender.getName());

        List<ApparelCategory> apparelCategories;

        if (brand==0) {
            apparelCategories = apparelCategoryRepository.findByGenderCategoryId(gender);
        } else {
            apparelCategories = apparelCategoryRepository.findByBrandCategoryIdAndGenderCategoryId(brand, gender);
        }

        if (apparelCategories.isEmpty()) {
            throw new ApiRequestException("Apparel Categories not found !", HttpStatus.NOT_FOUND);
        }

        List<ApparelCategoryDto> apparelCategoriesDto = apparelCategoryMapper.apparelCategoriesToApparelCategoriesDto(apparelCategories);
        apparelCategoriesResponse.setApparelCategories(apparelCategoriesDto);

        return apparelCategoriesResponse;

    }

}
