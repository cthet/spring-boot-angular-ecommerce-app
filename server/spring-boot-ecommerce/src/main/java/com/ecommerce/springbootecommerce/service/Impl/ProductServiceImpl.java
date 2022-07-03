package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.dto.ProductDTO;
import com.ecommerce.springbootecommerce.dto.ProductsResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ProductDTO getProductById(Long productId) {

        Product product = productRepository.findById(productId).orElseThrow(() -> new ApiRequestException("Product not found", HttpStatus.NOT_FOUND));
        ProductDTO productDTO = new ProductDTO();
        productDTO = modelMapper.map(product, ProductDTO.class);

        return productDTO;

    }

    @Override
    public ProductsResponse getProducts(int gender, int apparel, int priceRange, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Product> pageProduct = null;

        //gender is always != 0

        if(gender != 0 && apparel == 9 && priceRange == 5) {
            pageProduct = productRepository.findByGenderCategoryId(gender, pageable);
        } else if (gender != 0 && apparel != 9 && priceRange == 5) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryId(gender, apparel, pageable);
        } else if (gender != 0 && apparel == 9 && priceRange != 5) {
            pageProduct = productRepository.findByGenderCategoryIdAndPriceRangeCategoryId(gender, priceRange, pageable);
        } else if (gender != 0 && apparel != 9 && priceRange != 5) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdAndPriceRangeCategoryId(gender, apparel, priceRange, pageable);
        }

        List<Product> products = pageProduct.getContent();

        List<ProductDTO> productDTOS = new ArrayList<ProductDTO>();

        for (Product product: products) {
            ProductDTO productDTO = new ProductDTO();
            productDTO = modelMapper.map(product, ProductDTO.class);
            productDTOS.add(productDTO);
        }

        ProductsResponse productsResponse = new ProductsResponse();
        productsResponse.setProductsDTO(productDTOS);
        productsResponse.setCurrentPage(pageProduct.getNumber());
        productsResponse.setSize(pageProduct.getSize());
        productsResponse.setTotalItems(pageProduct.getTotalElements());
        productsResponse.setTotalPages(pageProduct.getTotalPages());

        return productsResponse;

    }


//    public Sort.Direction getSortDirection(String direction) {
//        if (direction.equals("asc")) {
//            return Sort.Direction.ASC;
//        } else if (direction.equals("desc")) {
//            return Sort.Direction.DESC;
//        }
//        return Sort.Direction.ASC;
//    }


}










