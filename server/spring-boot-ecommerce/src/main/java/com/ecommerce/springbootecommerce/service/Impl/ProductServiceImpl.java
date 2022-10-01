package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ApiRequestException("Product not found in database!", HttpStatus.NOT_FOUND));
        ProductDTO productDTO = new ProductDTO();
        productDTO = modelMapper.map(product, ProductDTO.class);

        return productDTO;

    }

    @Override
    public ProductsResponse getProducts(int gender, int apparel, int brand, int page, int size, String[] sort) {

        List<Sort.Order> orders = new ArrayList<Sort.Order>();
        Sort.Direction direction = getSortDirection(sort[1]);
        Sort.Order order = new Sort.Order(direction, sort[0]);
        orders.add(order);

        Pageable pagingSort = PageRequest.of(page, size, Sort.by(orders));

        Page<Product> pageProduct;

        if (gender != 0 && apparel == 1 && brand == 1) {
            pageProduct = productRepository.findByGenderCategoryId(gender, pagingSort);
        } else if (gender != 0 && apparel == 1) {
            pageProduct = productRepository.findByGenderCategoryIdAndBrandCategoryId(gender, brand, pagingSort);
        } else if (gender != 0 && brand == 1) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryId(gender, apparel, pagingSort);
        } else if (gender != 0) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdAndBrandCategoryId(gender, apparel, brand, pagingSort);
        } else {
            throw new ApiRequestException("Error in request", HttpStatus.BAD_REQUEST);
        }

            List<Product> products = pageProduct.getContent();

            List<ProductDTO> productDTOS = new ArrayList<ProductDTO>();

            for (Product product : products) {
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
    public Sort.Direction getSortDirection (String direction){
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }
            return Sort.Direction.ASC;
    }

}










