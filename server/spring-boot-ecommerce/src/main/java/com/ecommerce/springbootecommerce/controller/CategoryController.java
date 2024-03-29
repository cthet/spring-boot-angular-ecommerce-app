package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/category")
public class CategoryController {

    private final ApparelCategoryService apparelCategoryService;
    private final BrandCategoryService brandCategoryService;


    @GetMapping("/brands")
    public ResponseEntity<BrandCategoriesResponse> getBrandCategoriesByGenderIdAndApparelCategoryId(@RequestParam(required = true) int genderId,
                                                                       @RequestParam(defaultValue = "0") int apparelCategoryId) {

             BrandCategoriesResponse brandCategoriesResponse = brandCategoryService.getBrandCategoriesByGenderIdAndApparelCategoryId(genderId, apparelCategoryId);

            return new ResponseEntity<>(brandCategoriesResponse, HttpStatus.OK);
    }

    @GetMapping("/apparels")
    public ResponseEntity<ApparelCategoriesResponse> getApparelCategoriesByGenderIdAndBranCategoryId(@RequestParam(required = true) int genderId,
                                                                                             @RequestParam(defaultValue = "0") int brandId) {
            ApparelCategoriesResponse apparelCategoriesResponse = apparelCategoryService.getApparelCategoriesByGenderIdAndBranCategoryId(genderId, brandId);

            return new ResponseEntity<>(apparelCategoriesResponse, HttpStatus.OK);

    }

}
