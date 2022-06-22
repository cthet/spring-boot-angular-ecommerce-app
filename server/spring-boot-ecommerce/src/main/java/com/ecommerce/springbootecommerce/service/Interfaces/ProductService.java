package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.web.dto.ProductDTO;
import com.ecommerce.springbootecommerce.web.dto.ProductsResponse;

public interface ProductService {

    ProductDTO getProductById(Long productId);
    ProductsResponse getProducts(int gender, int apparel, int priceRange, int page, int size);

}
