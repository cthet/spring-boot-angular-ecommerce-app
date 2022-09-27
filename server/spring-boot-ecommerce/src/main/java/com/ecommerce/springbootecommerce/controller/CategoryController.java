package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.category.PriceRangeCategoriesDTO;
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
    PriceRangeCategoryService priceRangeCategoryService;

    @GetMapping("/apparels")
    public ResponseEntity<?> getApparelsByGender(@RequestParam(defaultValue = "1") int gender) {
        try {
            ApparelCategoriesDTO  apparelCategoriesDTO = apparelCategoryService.getApparelCategoriesByGender(gender);

            return new ResponseEntity<>(apparelCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/price_range")
    public ResponseEntity<?> getAllPriceRange() {
        try {
            PriceRangeCategoriesDTO priceRangeCategoriesDTO = priceRangeCategoryService.getAllPriceRangeCategories();

            return new ResponseEntity<>(priceRangeCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
