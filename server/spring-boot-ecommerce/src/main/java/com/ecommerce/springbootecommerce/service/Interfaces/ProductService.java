package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;

import java.util.List;

public interface ProductService {
    ProductDTO getProductById(Long productId);
    ProductsResponse getProducts(int gender, int brand, List<Integer> category, int page, int size, String[] sort);
}
