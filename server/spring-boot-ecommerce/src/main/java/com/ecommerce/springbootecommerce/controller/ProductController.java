package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<ProductsResponse> getProducts(@RequestParam(defaultValue = "2") int gender,
                                                        @RequestParam(defaultValue = "0") int brand,
                                                        @RequestParam(value = "category" , defaultValue = "0"  ) List<Integer> category,
                                                        @RequestParam(defaultValue = "0")  int page,
                                                        @RequestParam(defaultValue = "10") int size,
                                                        @RequestParam(defaultValue = "id,asc") String[] sort) {
        try {
            return new ResponseEntity<>(productService.getProducts(gender, brand, category, page, size, sort), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
