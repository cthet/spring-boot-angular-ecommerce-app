package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.ecommerce.springbootecommerce.domain.BrandCategoryImage;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDto;
import com.ecommerce.springbootecommerce.mappers.BrandCategoryMapper;
import com.ecommerce.springbootecommerce.repository.BrandCategoryImageRepository;
import com.ecommerce.springbootecommerce.repository.BrandCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandCategoryServiceImpl implements BrandCategoryService {

    private final BrandCategoryRepository brandCategoryRepository;
    private final BrandCategoryImageRepository brandCategoryImageRepository;
    private final GenderCategoryRepository genderCategoryRepository;
    private final BrandCategoryMapper brandCategoryMapper;

    @Override
    public BrandCategoriesResponse getBrandCategoriesByGenderId(int gender, int apparelCategoryId) {

        BrandCategoriesResponse brandCategoriesResponse = new BrandCategoriesResponse();

        brandCategoriesResponse.setGender(genderCategoryRepository.findById(gender)
                .orElseThrow(() -> new ApiRequestException("No gender found in database!", HttpStatus.NOT_FOUND))
                .getName());

        List<BrandCategory> brandCategories = new ArrayList<BrandCategory>();
        if(apparelCategoryId == 0){
            brandCategories = brandCategoryRepository.findByGenderCategoryId(gender);
        } else {
            brandCategories = brandCategoryRepository.findByGenderCategoryIdAndApparelCategoryId(gender, apparelCategoryId);
        }

        if(brandCategories.isEmpty()){
            throw new ApiRequestException("Brand Categories not found !", HttpStatus.NOT_FOUND);
        }

        List<BrandCategoryDto> brandCategoryDtos = new ArrayList<BrandCategoryDto>();

        brandCategories.forEach(brandCategory -> {
            BrandCategoryDto brandCategoryDTO = brandCategoryMapper.brandCategoryToBrandCategoryDto(brandCategory);
            BrandCategoryImage BrandCategoryImage = brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(brandCategory.getId(), gender)
                    .orElseThrow(()-> new ApiRequestException("Brand Categories images not found !", HttpStatus.NOT_FOUND));
            brandCategoryDTO.setImageUrl(BrandCategoryImage.getImage_url());
            brandCategoryDtos.add(brandCategoryDTO);
        });
        brandCategoriesResponse.setBrandCategories(brandCategoryDtos);

        return brandCategoriesResponse;

    }



}
