package com.ecommerce.springbootecommerce.service;

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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class BrandCategoryServiceTest {

    @MockBean
    BrandCategoryRepository brandCategoryRepository;

    @MockBean
    BrandCategoryImageRepository brandCategoryImageRepository;

    @MockBean
    GenderCategoryRepository genderCategoryRepository;

    @MockBean
    BrandCategoryMapper brandCategoryMapper;

    @Autowired
    BrandCategoryService brandCategoryService;

    private GenderCategory testGenderCategory;
    private BrandCategory testBrandCategory;
    private BrandCategoryImage testBrandCategoryImage;
    private BrandCategoryDto testBrandCategoryDto;
    private int testGenderId;
    private int testApparelCategoryId;


    @BeforeEach
    public void setup() {
       testGenderId = 1;
       testApparelCategoryId = 1;
       testGenderCategory = new GenderCategory();
       testGenderCategory.setId(1);
       testGenderCategory.setName("male");

       testBrandCategory = new BrandCategory();
       testBrandCategory.setId(1);
       testBrandCategory.setName("Shoes");
       testBrandCategory.setGenderCategories(Set.of(testGenderCategory));

       testBrandCategoryImage = new BrandCategoryImage();
       testBrandCategoryImage.setImage_url("image_url");

       testBrandCategoryDto = new BrandCategoryDto();
       testBrandCategoryDto.setId(1);
       testBrandCategoryDto.setName("Shoes");
       testBrandCategoryDto.setImageUrl(testBrandCategoryImage.getImage_url());

    }

    @Test
    @DisplayName("Test testGetBrandCategoriesByGenderId - Success - apparelCategoryId is 0")
    public void testGetBrandCategoriesByGenderIdSuccess_apparelCategoryIdIsZero() {
        given(genderCategoryRepository.findById(1)).willReturn(Optional.of(testGenderCategory));
        given(brandCategoryRepository.findByGenderCategoryIdAndProductsIsNotNull(testGenderId)).willReturn(List.of(testBrandCategory));

        given(brandCategoryMapper.brandCategoryToBrandCategoryDto(testBrandCategory)).willReturn(testBrandCategoryDto);
        given(brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(testBrandCategory.getId(), 1)).willReturn(Optional.of(testBrandCategoryImage));

        BrandCategoriesResponse brandCategoriesResponse = brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(testGenderId, 0);

        assertEquals(brandCategoriesResponse.getBrandCategories(), List.of(testBrandCategoryDto));



    }

    @Test
    @DisplayName("Test testGetBrandCategoriesByGenderId - Success - apparelCategoryId is != 0")
    public void testGetBrandCategoriesByGenderIdSuccess_apparelCategoryIdIsNotZero() {
        given(genderCategoryRepository.findById(1)).willReturn(Optional.of(testGenderCategory));
        given(brandCategoryRepository.findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(testGenderId, testApparelCategoryId)).willReturn(List.of(testBrandCategory));

        given(brandCategoryMapper.brandCategoryToBrandCategoryDto(testBrandCategory)).willReturn(testBrandCategoryDto);
        given(brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(testBrandCategory.getId(), 1)).willReturn(Optional.of(testBrandCategoryImage));

        BrandCategoriesResponse brandCategoriesResponse = brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(testGenderId, testApparelCategoryId);

        assertEquals(brandCategoriesResponse.getBrandCategories(), List.of(testBrandCategoryDto));
    }

    @Test
    @DisplayName("Test testGetBrandCategoriesByGenderId - Failure - No gender found")
    public void testGetBrandCategoriesByGenderIdFailure_GenderNotFound() {
        given(genderCategoryRepository.findById(testGenderId)).willReturn(Optional.empty());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(testGenderId, testApparelCategoryId));

        assertEquals("Gender with id " + testGenderId + " not found.", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

    }


    @Test
    @DisplayName("Test testGetBrandCategoriesByGenderId - Failure - Brand Categories not found")
    public void testGetBrandCategoriesByGenderIdFailure_BrandCategoriesNotFound() {
        given(genderCategoryRepository.findById(1)).willReturn(Optional.of(testGenderCategory));
        given(brandCategoryRepository.findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(testGenderId, testApparelCategoryId)).willReturn(Collections.emptyList());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(testGenderId, testApparelCategoryId));

        assertEquals("No Brand Categories found for given parameters.", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

    }

    @Test
    @DisplayName("Test testGetBrandCategoriesByGenderId - Failure - Brand Categories Images not found")
    public void testGetBrandCategoriesByGenderIdFailure_BrandCategoriesImagesNotFound() {
        given(genderCategoryRepository.findById(1)).willReturn(Optional.of(testGenderCategory));
        given(brandCategoryRepository.findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(testGenderId, testApparelCategoryId)).willReturn(List.of(testBrandCategory));
        given(brandCategoryMapper.brandCategoryToBrandCategoryDto(testBrandCategory)).willReturn(testBrandCategoryDto);
        given(brandCategoryImageRepository.findByBrandCategoryIdAndGenderCategoryId(testBrandCategory.getId(), 1)).willReturn(Optional.empty());


        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(testGenderId, testApparelCategoryId));

        assertEquals("No Brand Categories images found for brand category id: " + testBrandCategory.getId(), exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

    }

}
