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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.math.BigDecimal;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @MockBean
    private ProductRepository productRepository;

    @MockBean
    private ProductMapper productMapper;

    private Product testProduct;
    private ProductDto testProductDto;
    private List<Product> testProducts = new ArrayList<>();
    private List<ProductDto> testProductDtos = new ArrayList<>();
    private Page<Product> testPageProduct;

    private int testGenderId;
    private List<Integer> testCategoryIds = new ArrayList<>();
    private List<Integer> testBrandIds = new ArrayList<>();
    private String[] testSort = new String[2];
    private int testPage;
    private int testSize;
    private int testTotalItems;
    private int testTotalPages;
    private Pageable testPagingSort;

    @BeforeEach
    void setUp() {
        GenderCategory genderCategory = new GenderCategory();
        genderCategory.setName("femme");

        ApparelCategory apparelCategory = new ApparelCategory();
        apparelCategory.setName("Manteaux");

        BrandCategory brandCategory = new BrandCategory();
        brandCategory.setName("Alexander McQueen");

        BigDecimal bigDecimal = new BigDecimal("1000");

        testProduct = new Product();
        testProduct.setId(1L);
        testProduct.setProductName("product name");
        testProduct.setUnitPrice(bigDecimal);
        testProduct.setImageUrl("productImageUrl");
        testProduct.setActive(true);
        testProduct.setNewProduct(true);
        testProduct.setUnitsInStocks(100);
        testProduct.setGenderCategory(genderCategory);
        testProduct.setBrandCategory(brandCategory);
        testProduct.setApparelCategory(apparelCategory);
        testProducts.add(testProduct);

        testProductDto = new ProductDto(1L, "product name", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");
        testProductDtos.add(testProductDto);

        testPageProduct = new PageImpl<>(testProducts);
        testGenderId = 1;
        testCategoryIds = Arrays.asList(1);
        testBrandIds = Arrays.asList(1);
        testSort[0]="id";
        testSort[1]="asc";
        testPage = 0;
        testSize = 1;
        testTotalItems = 1;
        testTotalPages = 1;
        testPagingSort = PageRequest.of(testPage, testSize);
    }

    @Test
    @DisplayName("Test getProductById - Success")
    void testGetProductByIdSuccess() throws Exception {
        given(productRepository.findById(1L)).willReturn(Optional.of(testProduct));
        given(productMapper.productToProductDto(testProduct)).willReturn(testProductDto);

        ProductDto returnedProductDto = productService.getProductById(1L);

        assertEquals(testProductDto, returnedProductDto);
    }

    @Test
    @DisplayName("Test getProductById - Not Found")
    void testGetProductByIdNotFound() throws Exception {
        Long nonExistingId = 1L;
        given(productRepository.findById(nonExistingId)).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> {
            productService.getProductById(nonExistingId);
        });

        String expectedMessage = "Product not found in database!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    @DisplayName("Test getProducts - Success")
    void testGetProductsSuccess() throws Exception {
        given(productRepository.findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryIdIn(
                testGenderId, testCategoryIds, testBrandIds,  PageRequest.of(testPage, testSize, Sort.by(Sort.Direction.ASC, "id"))))
                .willReturn(testPageProduct);
        given(productMapper.productsToProductsDto(testProducts)).willReturn(testProductDtos);

        ProductsResponse productsResponse = productService.getProducts(testGenderId, testBrandIds, testCategoryIds, testPage, testSize, testSort);

        assertEquals(testProductDtos, productsResponse.getProductsDTO());
        assertEquals(testPage, productsResponse.getCurrentPage());
        assertEquals(testSize, productsResponse.getSize());
        assertEquals(testTotalItems, productsResponse.getTotalItems());
        assertEquals(testTotalPages, productsResponse.getTotalPages());
    }

    @Test
    @DisplayName("Test getProducts - Failure")
    void testGetProductsFailure() throws Exception {
        Exception exception = assertThrows(ApiRequestException.class, () -> {
            productService.getProducts(0, Arrays.asList(0), Arrays.asList(0), testPage, testSize, testSort);
        });

        String expectedMessage = "Error in request";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));

    }

    @Test
    @DisplayName("Test getNewProducts - Success")
    void testGetNewProductsSuccess() throws Exception {

        given(productRepository.findNewProductByGenderCategoryId(testGenderId, testPagingSort)).willReturn(testPageProduct);
        given(productMapper.productsToProductsDto(testProducts)).willReturn(testProductDtos);

        ProductsResponse productsResponse = productService.getNewProducts(testGenderId, testPage, testSize);

        assertEquals(testProductDtos, productsResponse.getProductsDTO());
        assertEquals(testPage, productsResponse.getCurrentPage());
        assertEquals(testSize, productsResponse.getSize());
        assertEquals(testTotalItems, productsResponse.getTotalItems());
        assertEquals(testTotalPages, productsResponse.getTotalPages());
    }

    @Test
    @DisplayName("Test getNewProducts - Empty")
    void testGetNewProductsEmpty() throws Exception {
        long testEmptyTotalItems = 0L;
        List<ProductDto> testEmptyProductsDto = Collections.emptyList();
        List<Product> testEmptyProducts = Collections.emptyList();
        Page<Product> testEmptyPageProduct = new PageImpl<>(testEmptyProducts);

        given(productRepository.findNewProductByGenderCategoryId(testGenderId, testPagingSort)).willReturn(testEmptyPageProduct);

        ProductsResponse productsResponse = productService.getNewProducts(testGenderId, testPage, testSize);

        assertEquals(testEmptyProductsDto, productsResponse.getProductsDTO());
        assertEquals(testPage, productsResponse.getCurrentPage());
        assertEquals(testSize, productsResponse.getSize());
        assertEquals(testEmptyTotalItems, productsResponse.getTotalItems());
        assertEquals(testTotalPages, productsResponse.getTotalPages());

    }
}