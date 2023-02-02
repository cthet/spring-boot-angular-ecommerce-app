package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;

import java.util.List;

public interface ProductService {

    ProductDto getProductById(Long productId);

    ProductsResponse getProducts(int gender, List<Integer> brand, List<Integer> category, int page, int size, String[] sort);

    ProductsResponse getNewProducts(int gender, int page, int size);
}
