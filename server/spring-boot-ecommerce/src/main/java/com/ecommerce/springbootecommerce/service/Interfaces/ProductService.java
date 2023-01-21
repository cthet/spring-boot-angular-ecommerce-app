package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;

import java.util.List;

public interface ProductService {
    ProductDto getProductById(Long productId);
    ProductsResponse getProducts(int gender, int brand, List<Integer> category, int page, int size, String[] sort);
}
