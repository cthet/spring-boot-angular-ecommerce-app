package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.mappers.ProductMapper;
import com.ecommerce.springbootecommerce.repository.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repository.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;

    @Autowired
    GenderCategoryRepository genderCategoryRepository;

    private final ProductMapper productMapper;

    @Override
    public ProductDto getProductById(Long productId) {

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ApiRequestException("Product not found in database!", HttpStatus.NOT_FOUND));
//        String apparel_category = product.getApparelCategory().getType();
//        String gender_category = product.getGenderCategory().getType();
//        String brand_category = product.getBrandCategory().getType();

        //ProductDto productDTO = new ProductDto();
        return productMapper.productToProductDto(product);
//        productDTO = modelMapper.map(product, ProductDto.class);
//
//        productDTO.setGender_category(gender_category);
//        productDTO.setProduct_category(apparel_category);
//        productDTO.setBrand_category(brand_category);

       // return productDTO;

    }

    @Override
    public ProductsResponse getProducts(int gender, int brand, List<Integer> category, int page, int size, String[] sort) {

        List<Sort.Order> orders = new ArrayList<Sort.Order>();
        Sort.Direction direction = getSortDirection(sort[1]);
        Sort.Order order = new Sort.Order(direction, sort[0]);
        orders.add(order);

        Pageable pagingSort = PageRequest.of(page, size, Sort.by(orders));

        Page<Product> pageProduct;

        if (gender != 0 && category.contains(0) && brand == 0) {
            pageProduct = productRepository.findByGenderCategoryId(gender, pagingSort);
        } else if (gender != 0 && category.contains(0)) {
            pageProduct = productRepository.findByGenderCategoryIdAndBrandCategoryId(gender, brand, pagingSort);
        } else if (gender != 0 && brand == 0) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdIn(gender, category, pagingSort);
        } else if (gender != 0) {
            pageProduct = productRepository.findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryId(gender, category, brand, pagingSort);
        } else {
            throw new ApiRequestException("Error in request", HttpStatus.BAD_REQUEST);
        }

            List<Product> products = pageProduct.getContent();

            List<ProductDto> productDtos =  productMapper.productsToProductsDto(products);

//            for (Product product : products) {
//
//                ProductDto productDTO = new ProductDto();
//
//                productDTO = modelMapper.map(product, ProductDto.class);
//
//
//                String apparel_category = product.getApparelCategory().getName();
//                String gender_category = product.getGenderCategory().getName();
//                String brand_category = product.getBrandCategory().getName();
//
//                productDTO.setGender_category(gender_category);
//                productDTO.setProduct_category(apparel_category);
//                productDTO.setBrand_category(brand_category);
//
//                productDtos.add(productDTO);
//            }

            ProductsResponse productsResponse = new ProductsResponse();
            productsResponse.setProductsDTO(productDtos);
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










