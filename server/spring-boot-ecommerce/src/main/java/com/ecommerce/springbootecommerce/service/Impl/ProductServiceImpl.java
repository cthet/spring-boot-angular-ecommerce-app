package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.mappers.ProductMapper;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public ProductDto getProductById(Long productId) {
        Product product = fetchProduct(productId);
        return productMapper.productToProductDto(product);
    }

    @Override
    public ProductsResponse getProducts(int gender, List<Integer> brand, List<Integer> category, int page, int size, String[] sort) {

        Pageable pagingSort = constructPageableWithSorting(page, size, sort);
        Page<Product> pageProduct = fetchProducts(gender, brand, category, pagingSort);

        return constructProductsResponse(pageProduct);
    }

    @Override
    public ProductsResponse getNewProducts(int gender, int page, int size) {

        Pageable pagingSort = PageRequest.of(page, size);
        Page<Product> pageProduct = productRepository.findNewProductByGenderCategoryId(gender, pagingSort);

        return constructProductsResponse(pageProduct);
    }

    private Product fetchProduct(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ApiRequestException("Product not found in database!", HttpStatus.NOT_FOUND));
    }

    private Page<Product> fetchProducts(int gender, List<Integer> brand, List<Integer> category, Pageable pagingSort) {
        Page<Product> pageProduct;

        if (gender != 0 && category.contains(0) && brand.contains(0)) {
            pageProduct = productRepository.findByGenderCategoryId(gender, pagingSort);
        } else if (gender != 0 && category.contains(0)) {
            pageProduct = productRepository.findByGenderCategoryIdAndBrandCategoryIdIn(gender, brand, pagingSort);
        } else if (gender != 0 && brand.contains(0)) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdIn(gender, category, pagingSort);
        } else if (gender != 0) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryIdIn(gender, category, brand, pagingSort);
        } else {
            throw new ApiRequestException("Error in request", HttpStatus.BAD_REQUEST);
        }
        return pageProduct;
    }

    private Pageable constructPageableWithSorting(int page, int size, String[] sort) {
        Sort.Direction direction = getSortDirection(sort[1]);
        Sort.Order order = new Sort.Order(direction, sort[0]);
        return PageRequest.of(page, size, Sort.by(order));
    }


    public Sort.Direction getSortDirection (String direction){
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }
            return Sort.Direction.ASC;
    }

    private ProductsResponse constructProductsResponse(Page<Product> pageProduct) {
        ProductsResponse productsResponse = new ProductsResponse();

        if (pageProduct == null || pageProduct.isEmpty()) {
            productsResponse.setProductsDTO(Collections.emptyList());
            productsResponse.setCurrentPage(0);
            productsResponse.setSize(1);
            productsResponse.setTotalItems(0L);
            productsResponse.setTotalPages(1);
        } else {
            List<ProductDto> productDtoList = productMapper.productsToProductsDto(pageProduct.getContent());
            productsResponse.setProductsDTO(productDtoList);
            productsResponse.setCurrentPage(pageProduct.getNumber());
            productsResponse.setSize(pageProduct.getSize());
            productsResponse.setTotalItems(pageProduct.getTotalElements());
            productsResponse.setTotalPages(pageProduct.getTotalPages());
        }
        return productsResponse;
    }

}










