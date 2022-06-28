package com.ecommerce.springbootecommerce.web.controller;

import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.CategoriesService;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.web.dto.ProductDTO;
import com.ecommerce.springbootecommerce.web.dto.ProductsResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {

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
