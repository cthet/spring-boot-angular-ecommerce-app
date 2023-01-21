package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.category.ApparelCategoriesDto;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoriesDto;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDto;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.BrandCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
             BrandCategoriesDto brandCategoriesDTO = brandCategoryService.getBrandCategoriesByGenderId(genderId);

            return new ResponseEntity<>(brandCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/brand/{id}")
    public ResponseEntity<?> getBrandById(@PathVariable("id") int id,
                                          @RequestParam(required = true) int genderId){
        try{
            BrandCategoryDto brandCategoryDTO = brandCategoryService.getBrandCategoryByIdAndGenderId(id, genderId);

            return new ResponseEntity<>(brandCategoryDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/apparels")
    public ResponseEntity<?> getApparelsCategoryByGenderIdAndBrandId(@RequestParam(required = true) int genderId,
                                                                 @RequestParam(defaultValue = "0") int brandId) {
        try {
            ApparelCategoriesDto apparelCategoriesDTO = apparelCategoryService.getApparelCategoriesByBrandIdAndGenderId(genderId, brandId);

            return new ResponseEntity<>(apparelCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
