package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.ecommerce.springbootecommerce.domain.BrandCategoryImage;
import com.ecommerce.springbootecommerce.domain.GenderCategory;
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

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BrandCategoryServiceImpl implements BrandCategoryService {

    private final BrandCategoryRepository brandCategoryRepository;
    private final BrandCategoryImageRepository brandCategoryImageRepository;
    private final GenderCategoryRepository genderCategoryRepository;
    private final BrandCategoryMapper brandCategoryMapper;

    @Override
    public BrandCategoriesResponse getBrandCategoriesByGenderIdAndApparelCategoryId(int genderId, int apparelCategoryId) {

        String genderName = getGenderName(genderId);

        List<BrandCategory> brandCategories = getBrandCategories(genderId, apparelCategoryId);

        checkBrandCategoriesNotEmpty(brandCategories);

        List<BrandCategoryDto> brandCategoryDtos = getBrandCategoryDtos(genderId, brandCategories);

        return new BrandCategoriesResponse(genderName, brandCategoryDtos);
    }

    private String getGenderName(int genderId) {
        return genderCategoryRepository.findById(genderId)
                .map(GenderCategory::getName)
                .orElseThrow(() -> new ApiRequestException("Gender with id " + genderId + " not found.", HttpStatus.NOT_FOUND));
    }

    private List<BrandCategory> getBrandCategories(int genderId, int apparelCategoryId) {
        if(apparelCategoryId == 0)
            return brandCategoryRepository.findByGenderCategoryIdAndProductsIsNotNull(genderId);
        return brandCategoryRepository.findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(genderId, apparelCategoryId);
    }

    private void checkBrandCategoriesNotEmpty(List<BrandCategory> brandCategories) {
        if (brandCategories.isEmpty()){
            throw new ApiRequestException("No Brand Categories found for given parameters.", HttpStatus.NOT_FOUND);
        }
    }

    private List<BrandCategoryDto> getBrandCategoryDtos(int genderId, List<BrandCategory> brandCategories) {

        return brandCategories.stream()
                .map(brandCategory -> createBrandCategoryDto(genderId, brandCategory))
                .collect(Collectors.toList());
    }

    private BrandCategoryDto createBrandCategoryDto(int genderId, BrandCategory brandCategory) {
        BrandCategoryDto brandCategoryDTO = brandCategoryMapper.brandCategoryToBrandCategoryDto(brandCategory);

        String imageUrl = brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(brandCategory.getId(), genderId)
                .map(BrandCategoryImage::getImage_url)
                .orElseThrow(() -> new ApiRequestException("No Brand Categories images found for brand category id: " + brandCategory.getId(), HttpStatus.NOT_FOUND));

        brandCategoryDTO.setImageUrl(imageUrl);
        return brandCategoryDTO;
    }




}
