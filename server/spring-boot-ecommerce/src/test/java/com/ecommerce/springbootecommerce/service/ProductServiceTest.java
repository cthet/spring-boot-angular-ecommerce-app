package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.ecommerce.springbootecommerce.domain.GenderCategory;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.mappers.ProductMapper;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @MockBean
    private ProductRepository repository;

    @MockBean
    private ProductMapper productMapper;


    @Test
    @DisplayName("Test getProductById - Success")
    void testGetProductByIdSuccess() throws Exception {

        GenderCategory mockGenderCategory = new GenderCategory();
        mockGenderCategory.setName("femme");
        ApparelCategory mockApparelCategory = new ApparelCategory();
        mockApparelCategory.setName("Manteaux");
        BrandCategory mockBrandCategory = new BrandCategory();
        mockBrandCategory.setName("Alexander McQueen");

        BigDecimal bigDecimal = new BigDecimal("1000");
        Product mockProduct = new Product();
        mockProduct.setId(1L);
        mockProduct.setProductName("product name");
        mockProduct.setUnitPrice(bigDecimal);
        mockProduct.setImageUrl("productImageUrl");
        mockProduct.setActive(true);
        mockProduct.setNewProduct(true);
        mockProduct.setUnitsInStocks(100);
        mockProduct.setGenderCategory(mockGenderCategory);
        mockProduct.setBrandCategory(mockBrandCategory);
        mockProduct.setApparelCategory(mockApparelCategory);

        ProductDto mockProductDto = new ProductDto(1L, "product name", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");

        when(repository.findById(1L)).thenReturn(Optional.of(mockProduct));
        when(productMapper.productToProductDto(mockProduct)).thenReturn(mockProductDto);

        ProductDto returnedProductDto = productService.getProductById(1L);

        assertEquals(mockProductDto, returnedProductDto);

    }

    @Test
    @DisplayName("Test getProductById - Not Found")
    void testGetProductByIdNotFound() throws Exception {
        Long nonExistingId = 1L;

        when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> {
            productService.getProductById(nonExistingId);
        });

        String expectedMessage = "Product not found in database!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    @DisplayName("Test getProductById - Found")
    void testGetProducts() throws Exception {

        int mockGenderId = 1;
        List<Integer> mockCategoryIds = Arrays.asList(1);
        List<Integer> mockBrandIds = Arrays.asList(1);
        String[] mockSort = {"id","asc"};

        int mockPage = 0;
        int mockSize = 1;
        int mockTotalItems = 1;
        int mockTotalPages = 1;


        GenderCategory mockGenderCategory = new GenderCategory();
        mockGenderCategory.setName("femme");
        ApparelCategory mockApparelCategory = new ApparelCategory();
        mockApparelCategory.setName("Manteaux");
        BrandCategory mockBrandCategory = new BrandCategory();
        mockBrandCategory.setName("Alexander McQueen");

        BigDecimal bigDecimal = new BigDecimal("1000");
        Product mockProduct = new Product();
        mockProduct.setId(1L);
        mockProduct.setProductName("product name");
        mockProduct.setUnitPrice(bigDecimal);
        mockProduct.setImageUrl("productImageUrl");
        mockProduct.setActive(true);
        mockProduct.setNewProduct(true);
        mockProduct.setUnitsInStocks(100);
        mockProduct.setGenderCategory(mockGenderCategory);
        mockProduct.setBrandCategory(mockBrandCategory);
        mockProduct.setApparelCategory(mockApparelCategory);

        ProductDto mockProductDto = new ProductDto(1L, "product name", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");

        List<Product> mockProducts = new ArrayList<>();
        mockProducts.add(mockProduct);
        Page<Product> mockPageProduct = new PageImpl<>(mockProducts);

        List<ProductDto> mockProductDtos = new ArrayList<>();
        mockProductDtos.add(mockProductDto);

        when(repository.findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryIdIn(mockGenderId, mockBrandIds, mockCategoryIds,  PageRequest.of(mockPage, mockSize, Sort.by(Sort.Direction.ASC, "id")))).thenReturn(mockPageProduct);
        when(productMapper.productsToProductsDto(mockProducts)).thenReturn(mockProductDtos);

        ProductsResponse productsResponse = productService.getProducts(mockGenderId, mockBrandIds, mockCategoryIds, mockPage, mockSize, mockSort);

        assertEquals(mockProductDtos, productsResponse.getProductsDTO());
        assertEquals(mockPage, productsResponse.getCurrentPage());
        assertEquals(mockSize, productsResponse.getSize());
        assertEquals(mockTotalItems, productsResponse.getTotalItems());
        assertEquals(mockTotalPages, productsResponse.getTotalPages());
    }


}