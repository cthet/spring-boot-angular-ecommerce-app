package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDTO;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    ApparelCategoryService apparelCategoryService;
    @Autowired
    BrandCategoryService brandCategoryService;
    @GetMapping("/brands")
    public ResponseEntity<?> getBrandsByGenderId(@RequestParam(required = true) int genderId) {
        try {
             BrandCategoriesDTO brandCategoriesDTO = brandCategoryService.getBrandCategoriesByGender(genderId);

            return new ResponseEntity<>(brandCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/apparels")
    public ResponseEntity<?> getApparelsCategoryByGenderIdAndBrandId(@RequestParam(required = true) int genderId,
                                                                 @RequestParam int brandId) {
        try {
            ApparelCategoriesDTO apparelCategoriesDTO = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(brandId, genderId);

            return new ResponseEntity<>(apparelCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
