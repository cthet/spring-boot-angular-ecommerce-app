package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/product/{id}")
    public ResponseEntity<ProductDTO> getProductById(@RequestParam("id") Long id) {

        try {
            return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products")
    public ResponseEntity<ProductsResponse> getProducts(@RequestParam(defaultValue = "1") int gender,
                                                        @RequestParam(defaultValue = "1")  int apparel,
                                                        @RequestParam(defaultValue = "1") int brand,
                                                        @RequestParam(defaultValue = "0")  int page,
                                                        @RequestParam(defaultValue = "10") int size,
                                                        @RequestParam(defaultValue = "id,desc") String[] sort) {
        try {
            return new ResponseEntity<>(productService.getProducts(gender, apparel, brand, page, size, sort), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
