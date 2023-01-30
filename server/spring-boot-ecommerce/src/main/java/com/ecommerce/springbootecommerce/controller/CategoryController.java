package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesResponse;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    ApparelCategoryService apparelCategoryService;
    @Autowired
    BrandCategoryService brandCategoryService;
    @GetMapping("/brands")
    public ResponseEntity<?> getBrandsByGenderId(@RequestParam(required = true) int genderId,
                                                 @RequestParam(defaultValue = "0") int apparelCategoryId) {
        try {
             BrandCategoriesResponse brandCategoriesResponse = brandCategoryService.getBrandCategoriesByGenderId(genderId, apparelCategoryId);

            return new ResponseEntity<>(brandCategoriesResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/apparels")
    public ResponseEntity<?> getApparelsCategoryByGenderIdAndBrandId(@RequestParam(required = true) int genderId,
                                                                     @RequestParam(defaultValue = "0") int brandId) {
        try {
            ApparelCategoriesResponse apparelCategoriesResponse = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(genderId, brandId);

            return new ResponseEntity<>(apparelCategoriesResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
