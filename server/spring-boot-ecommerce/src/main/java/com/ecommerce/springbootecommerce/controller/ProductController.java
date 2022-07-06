package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.dto.ProductDTO;
import com.ecommerce.springbootecommerce.dto.ProductsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

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
    public ResponseEntity<ProductsResponse> getProducts(@RequestParam(defaultValue = "1") int gender,
                                                        @RequestParam(defaultValue = "9")  int apparel,
                                                        @RequestParam(defaultValue = "5")  int priceRange,
                                                        @RequestParam(defaultValue = "0")  int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        try {
            ProductsResponse productsResponse = productService.getProducts(gender, apparel, priceRange, page, size);
            return new ResponseEntity<>(productsResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}