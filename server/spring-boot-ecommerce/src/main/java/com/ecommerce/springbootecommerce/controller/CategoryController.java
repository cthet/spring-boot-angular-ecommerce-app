package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/category")
public class CategoryController {

    private final ApparelCategoryService apparelCategoryService;
    private final BrandCategoryService brandCategoryService;

    @GetMapping("/brands")
    public ResponseEntity<BrandCategoriesResponse> getBrandsByGenderId(@RequestParam(required = true) int genderId,
                                                                       @RequestParam(defaultValue = "0") int apparelCategoryId) {

             BrandCategoriesResponse brandCategoriesResponse = brandCategoryService.getBrandCategoriesByGenderId(genderId, apparelCategoryId);

            return new ResponseEntity<>(brandCategoriesResponse, HttpStatus.OK);
    }

    @GetMapping("/apparels")
    public ResponseEntity<ApparelCategoriesResponse> getApparelsCategoryByGenderIdAndBrandId(@RequestParam(required = true) int genderId,
                                                                                             @RequestParam(defaultValue = "0") int brandId) {
            ApparelCategoriesResponse apparelCategoriesResponse = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(genderId, brandId);

            return new ResponseEntity<>(apparelCategoriesResponse, HttpStatus.OK);

    }

}
