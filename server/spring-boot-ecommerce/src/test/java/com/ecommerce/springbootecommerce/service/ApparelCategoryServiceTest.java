package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.domain.GenderCategory;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDto;
import com.ecommerce.springbootecommerce.mappers.ApparelCategoryMapper;
import com.ecommerce.springbootecommerce.repository.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ApparelCategoryServiceTest {

    @Autowired
    private ApparelCategoryService apparelCategoryService;

    @MockBean
    private GenderCategoryRepository genderCategoryRepository;

    @MockBean
    private ApparelCategoryRepository apparelCategoryRepository;

    @MockBean
    private ApparelCategoryMapper apparelCategoryMapper;


    private GenderCategory testGenderCategory;
    private ApparelCategory testApparelCategory;
    private ApparelCategoryDto testApparelCategoryDto;

    private int testGenderId;

    @BeforeEach
    void setUp() {

        testGenderCategory = new GenderCategory();
        testGenderCategory.setId(1);
        testGenderCategory.setName("male");
        testGenderId = 1;

        testApparelCategory = new ApparelCategory();
        testApparelCategory.setId(1);
        testApparelCategory.setName("shirts");

        testApparelCategoryDto = new ApparelCategoryDto();
        testApparelCategoryDto.setId(testApparelCategory.getId());
        testApparelCategoryDto.setName(testApparelCategory.getName());

        testGenderCategory.getApparelCategories().add(testApparelCategory);
        testApparelCategory.getGenderCategories().add(testGenderCategory);

    }


    @Test
    @DisplayName("Test getApparelCategoriesByBrandIdAndGenderId - Success - Brand is 0")
    void testGetApparelCategoriesByBrandIdAndGenderIdSuccessBrandIsZero() {

        given(genderCategoryRepository.findById(testGenderId)).willReturn(Optional.of(testGenderCategory));
        given(apparelCategoryRepository.findByGenderCategoryId(testGenderId)).willReturn(List.of(testApparelCategory));
        given(apparelCategoryMapper.apparelCategoriesToApparelCategoriesDto(List.of(testApparelCategory))).willReturn(List.of(testApparelCategoryDto));

        ApparelCategoriesResponse response = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(0, testGenderId);

        assertEquals( response.getGender(), testGenderCategory.getName());
        assertEquals(response.getApparelCategories(), List.of(testApparelCategoryDto));
    }

    @Test
    @DisplayName("Test getApparelCategoriesByBrandIdAndGenderId - Success - Brand is not 0")
    void testGetApparelCategoriesByBrandIdAndGenderIdSuccessBrandIsNotZero() {

        given(genderCategoryRepository.findById(testGenderId)).willReturn(Optional.of(testGenderCategory));
        given(apparelCategoryRepository.findByBrandCategoryIdAndGenderCategoryId(1, testGenderId)).willReturn(List.of(testApparelCategory));
        given(apparelCategoryMapper.apparelCategoriesToApparelCategoriesDto(List.of(testApparelCategory))).willReturn(List.of(testApparelCategoryDto));

        ApparelCategoriesResponse response = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(1, testGenderId);

        assertEquals(response.getGender(), testGenderCategory.getName());
        assertEquals(response.getApparelCategories(), List.of(testApparelCategoryDto));
    }


    @Test
    @DisplayName("Test getApparelCategoriesByBrandIdAndGenderId - Failure - Gender not found")
    void testGetApparelCategoriesByBrandIdAndGenderIdFailureGenderNotFound() {

        given(genderCategoryRepository.findById(testGenderId)).willReturn(Optional.empty());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(testGenderId, 0));

        assertEquals("Gender not found in database!", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());
    }

    @Test
    @DisplayName("Test getApparelCategoriesByBrandIdAndGenderId - Failure - Apparel Categories not found")
    void testGetApparelCategoriesByBrandIdAndGenderIdFailureApparelCategoriesNotFound() {
        given(genderCategoryRepository.findById(testGenderId)).willReturn(Optional.of(testGenderCategory));
        given(apparelCategoryRepository.findByBrandCategoryIdAndGenderCategoryId(1, testGenderId)).willReturn(Collections.emptyList());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(testGenderId, 1));

        assertEquals("Apparel Categories not found !", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());
    }
}
