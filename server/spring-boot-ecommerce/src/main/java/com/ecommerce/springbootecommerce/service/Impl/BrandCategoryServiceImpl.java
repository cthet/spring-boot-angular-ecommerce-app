package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.ecommerce.springbootecommerce.domain.BrandCategoryImage;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDTO;
import com.ecommerce.springbootecommerce.repository.BrandCategoryImageRepository;
import com.ecommerce.springbootecommerce.repository.BrandCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BrandCategoryServiceImpl implements BrandCategoryService {
    @Autowired
    BrandCategoryRepository brandCategoryRepository;

    @Autowired
    BrandCategoryImageRepository brandCategoryImageRepository;

    @Autowired
    GenderCategoryRepository genderCategoryRepository;


    @Override
    public BrandCategoriesDTO getBrandCategoriesByGenderId(int gender) {

        List<BrandCategory> brandCategories = brandCategoryRepository.findByGenderCategoryId(gender);


        if (brandCategories.isEmpty()) {
            throw new ApiRequestException("No brands found in database for this gender!", HttpStatus.NOT_FOUND);
        }

        BrandCategoriesDTO brandCategoriesDTO = new BrandCategoriesDTO();
        brandCategoriesDTO.setGender(genderCategoryRepository.findById(gender)
                .orElseThrow(() -> new ApiRequestException("No gender found in database!", HttpStatus.NOT_FOUND)).getType());

        List<BrandCategoryDTO> brandCategoryDTOS = new ArrayList<BrandCategoryDTO>();

        for (BrandCategory brandCategory : brandCategories) {

            BrandCategoryDTO brandCategoryDTO = new BrandCategoryDTO();

            Optional<BrandCategoryImage> optionalBrandCategoryImage = brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(brandCategory.getId(), gender);
            optionalBrandCategoryImage.ifPresent(brandCategoryImage -> brandCategoryDTO.setImageUrl(brandCategoryImage.getImage_url()));
            brandCategoryDTO.setId(brandCategory.getId());
            brandCategoryDTO.setBrand(brandCategory.getType());
            brandCategoryDTO.setDescription(brandCategory.getDescription());
            brandCategoryDTOS.add(brandCategoryDTO);
        }
        brandCategoriesDTO.setBrandCategories(brandCategoryDTOS);

        return brandCategoriesDTO;

    }

    @Override
    public BrandCategoryDTO getBrandCategoryByIdAndGenderId(int id, int gender) {
        BrandCategory brandCategory = brandCategoryRepository.findById(id)
                .orElseThrow(() -> new ApiRequestException("No Brand found in database!", HttpStatus.NOT_FOUND));

        BrandCategoryImage brandCategoryImage = brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(id, gender)
                .orElseThrow(() -> new ApiRequestException("No Brand image found in database!", HttpStatus.NOT_FOUND));

        BrandCategoryDTO brandCategoryDTO = new BrandCategoryDTO();
        brandCategoryDTO.setId(brandCategory.getId());
        brandCategoryDTO.setBrand(brandCategory.getType());
        brandCategoryDTO.setDescription(brandCategory.getDescription());
        brandCategoryDTO.setImageUrl(brandCategoryImage.getImage_url());

        return brandCategoryDTO;
    }
}
