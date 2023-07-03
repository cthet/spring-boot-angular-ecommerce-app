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
    public ApparelCategoriesResponse getApparelCategoriesByGenderIdAndBranCategoryId(int gender, int brand) {

        ApparelCategoriesResponse apparelCategoriesResponse = new ApparelCategoriesResponse();

        GenderCategory _gender = genderCategoryRepository.findById(gender)
                .orElseThrow(() -> new ApiRequestException("Gender not found in database!", HttpStatus.NOT_FOUND));
        apparelCategoriesResponse.setGender(_gender.getName());


        List<ApparelCategoryDto> apparelCategoriesDto = getApparelCategoriesDto(brand, gender);
        apparelCategoriesResponse.setApparelCategories(apparelCategoriesDto);

        return apparelCategoriesResponse;

    }

    private List<ApparelCategoryDto> getApparelCategoriesDto(int brand, int gender) {
        List<ApparelCategory> apparelCategories;

        if (brand == 0) {
            apparelCategories = apparelCategoryRepository.findByGenderCategoryIdAndProductsIsNotNull(gender);
        } else {
            apparelCategories = apparelCategoryRepository.findByBrandCategoryIdAndGenderCategoryIdAndProductsIsNotNull(brand, gender);
        }

        if (apparelCategories.isEmpty()) {
            throw new ApiRequestException("Apparel Categories not found !", HttpStatus.NOT_FOUND);
        }

        return apparelCategoryMapper.apparelCategoriesToApparelCategoriesDto(apparelCategories);
    }

}


