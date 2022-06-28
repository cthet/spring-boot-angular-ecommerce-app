package com.ecommerce.springbootecommerce.web.controller;

import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.CategoriesService;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.web.dto.ApparelCategoriesDTO;
import com.ecommerce.springbootecommerce.web.dto.PriceRangeCategoriesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    ProductService productService;

    @Autowired
    CategoriesService categoriesService;
    @Autowired
    ApparelCategoryService apparelCategoryService;
    @Autowired
    PriceRangeCategoryService priceRangeCategoryService;

    @Autowired
    PriceRangeCategoryRepository priceRangeCategoryRepository;

    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;

    @GetMapping("/apparels")
    public ResponseEntity<ApparelCategoriesDTO> getApparelsByGender(@RequestParam(defaultValue = "1") int gender) {
        try {
            ApparelCategoriesDTO  apparelCategoriesDTO = apparelCategoryService.getApparelCategoriesByGender(gender);
            if(apparelCategoriesDTO.equals(null)) {
                return new ResponseEntity("Apparels categories not found", HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(apparelCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/price_range")
    public ResponseEntity<PriceRangeCategoriesDTO> getAllPriceRange() {
        try {
            PriceRangeCategoriesDTO priceRangeCategoriesDTO = priceRangeCategoryService.getAllPriceRangeCategories();

            return new ResponseEntity<>(priceRangeCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
