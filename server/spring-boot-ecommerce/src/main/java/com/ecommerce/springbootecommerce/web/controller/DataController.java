package com.ecommerce.springbootecommerce.web.controller;

import com.ecommerce.springbootecommerce.domain.Apparel;
import com.ecommerce.springbootecommerce.service.interfaces.ApparelService;.
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    ApparelService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Apparel> getProductById(@PathVariable("id") Long id) {

        return ResponseEntity.ok()

//
//        return productService.getApparelById(id);
//
//        Optional<Apparel> optionalProduct = productRepository.findById(id);
//        if (optionalProduct.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        Apparel apparel = optionalProduct.get();
//
//        return new ResponseEntity<>(apparel, HttpStatus.OK);
    }

//    @GetMapping()
//    public ResponseEntity<Iterable<Apparel>> getProducts(@RequestParam(required = true) String gender,
//                                                         @RequestParam(required = false) String apparel,
//                                                         @RequestParam(required = false) String priceRange,
//                                                         @RequestParam(defaultValue = "0") int page,
//                                                         @RequestParam(defaultValue = "10") int size,
//                                                         @RequestParam("id,desc") String [] sort) {
//
//        try {
//
//            ProductDTO productDTO;
//
//
//            return new ResponseEntity<>(productDTO, HttpStatus.OK);
//        }
//
//    Iterable<Apparel> products = productRepository.findAll();
//
//
//    }


//    @GetMapping("/product/{category}")
//    public ResponseEntity<Product> getProductByCategory(@PathVariable("category") String category) {
//
//    }


}
