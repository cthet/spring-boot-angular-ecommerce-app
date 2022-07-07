package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;

public interface ProductService {
    ProductDTO getProductById(Long productId);
    ProductsResponse getProducts(int gender, int apparel, int priceRange, int page, int size);
}
