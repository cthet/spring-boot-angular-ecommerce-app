package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.repositories.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import com.ecommerce.springbootecommerce.web.dto.ProductDTO;
import com.ecommerce.springbootecommerce.web.dto.ProductsDTO;
import com.ecommerce.springbootecommerce.web.dto.ProductsResponse;
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

        Product product = productRepository.findById(productId).orElseThrow(() -> new ApiRequestException("Apparel not found", HttpStatus.NOT_FOUND));
        ProductDTO productDTO = new ProductDTO();
        productDTO = modelMapper.map(product, ProductDTO.class);

        return productDTO;

    }

    @Override
    public ProductsResponse getProducts(int gender, int apparel, int priceRange, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        Page<Product> pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdAndPriceRangeCategoryId(gender, apparel, priceRange, pageable);
        List<Product> products = pageProduct.getContent();

        List<ProductDTO> productDTOS = new ArrayList<ProductDTO>();

        for (Product product: products) {
            ProductDTO productDTO = new ProductDTO();
            productDTO = modelMapper.map(product, ProductDTO.class);
            productDTOS.add(productDTO);
        }

        ProductsDTO productsDTO = new ProductsDTO();
        productsDTO.setProductDTOS(productDTOS);

        ProductsResponse productsResponse = new ProductsResponse();
        productsResponse.setProductsDTO(productsDTO);
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










