package com.ecommerce.springbootecommerce.service.interfaces;

import com.ecommerce.springbootecommerce.domain.Product;

public interface ProductService {

    Product getProductById(Long productId);
//
//    Map<String, Object> getProducts(String gender, String apparel, String priceRange, int page, int size, String[] sort);

}
