package com.ecommerce.springbootecommerce.web.controller;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.PriceRangeCategory;
import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.CategoriesService;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.web.dto.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class DataController {

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

    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") Long id) {

        try {
            ProductDTO productDTO = productService.getProductById(id);
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/apparels_categories")
    public  ResponseEntity<ApparelCategoriesDTO> getApparelsByGender(@RequestParam(defaultValue = "1") int gender) {
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

    @GetMapping("/price_range_categories")
    public ResponseEntity<PriceRangeCategoriesDTO> getPriceRangeByApparels(@RequestParam(defaultValue = "1") int apparel) {
        try {
  //          PriceRangeCategoriesDTO priceRangeCategoriesDTO = priceRangeCategoryService.getPriceRangeCategoriesByApparelCategory(apparel);

            List<PriceRangeCategory> priceRangeCategories =  priceRangeCategoryRepository.findByApparelCategoryId(apparel);

            PriceRangeCategoriesDTO priceRangeCategoriesDTO = new PriceRangeCategoriesDTO();
            priceRangeCategoriesDTO.setApparelCategory(apparelCategoryRepository.findById(apparel).orElseThrow(()-> new ApiRequestException("Price range categories not found", HttpStatus.NOT_FOUND)).getType());

            List<PriceRangeCategoryDTO> PriceRangeCategoryDTOS = new ArrayList<PriceRangeCategoryDTO>();

            for(PriceRangeCategory priceRangeCategory: priceRangeCategories){
                PriceRangeCategoryDTO priceRangeCategoryDTO = new PriceRangeCategoryDTO();
                priceRangeCategoryDTO.setCategory(priceRangeCategory.getType());
                PriceRangeCategoryDTOS.add(priceRangeCategoryDTO);
            }

            priceRangeCategoriesDTO.setPriceRangeCategoryDTOS(PriceRangeCategoryDTOS);

//            if(priceRangeCategoriesDTO.equals(null)) {
//                return new ResponseEntity("Price_range categories not found", HttpStatus.NOT_FOUND);
//            }

            return new ResponseEntity<>(priceRangeCategoriesDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }





    @GetMapping("/search")
    public ResponseEntity<ProductsResponse> getProducts(@RequestParam(required = true) int gender,
                                                        @RequestParam(defaultValue = "0")  int apparel,
                                                        @RequestParam(defaultValue = "0")  int priceRange,
                                                        @RequestParam(defaultValue = "0")  int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        try {
            ProductsResponse productsResponse = new ProductsResponse();
//
//            productsResponse = productService.getProducts(gender, apparel, priceRange, page, size);
//
//            if(productsResponse.getProductsDTO().equals(null)) {
//                return new ResponseEntity("Products not found", HttpStatus.NOT_FOUND);
//            }
//
            return new ResponseEntity<>(productsResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
//
//    @GetMapping("/categories")
//    public  ResponseEntity<CategoriesDTO> getAllCategories() {
//        try {
////            CategoriesDTO categoriesDTO = categoriesService.getAllCategories();
////
////            if(categoriesDTO.getCategories().isEmpty()) {
////                return new ResponseEntity("Categories not found", HttpStatus.NOT_FOUND);
////            }
//
//            return new ResponseEntity<>(null, HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }
//




}
