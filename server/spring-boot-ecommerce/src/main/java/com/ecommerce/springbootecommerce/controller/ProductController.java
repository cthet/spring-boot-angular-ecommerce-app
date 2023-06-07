package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/product")
public class ProductController {

    private final ProductService productService;

    @GetMapping("{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long id) {

            return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity<ProductsResponse> getProducts(@RequestParam(defaultValue = "2") int gender,
                                                        @RequestParam(value = "brand" , defaultValue = "0") List<Integer> brand,
                                                        @RequestParam(value = "category" , defaultValue = "0"  ) List<Integer> category,
                                                        @RequestParam(defaultValue = "0")  int page,
                                                        @RequestParam(defaultValue = "10") int size,
                                                        @RequestParam(defaultValue = "id,asc") String[] sort) {

            return new ResponseEntity<>(productService.getProducts(gender, brand, category, page, size, sort), HttpStatus.OK);

    }

    @GetMapping("/new")
    public ResponseEntity<ProductsResponse> getNewProducts(@RequestParam(defaultValue = "2") int gender,
                                                           @RequestParam(defaultValue = "0")  int page,
                                                           @RequestParam(defaultValue = "10") int size) {
            return new ResponseEntity<>(productService.getNewProducts(gender, page, size), HttpStatus.OK);

    }



}
