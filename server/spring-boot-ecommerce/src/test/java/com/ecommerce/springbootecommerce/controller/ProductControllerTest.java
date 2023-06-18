package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.dto.product.ProductsResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.ProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.doReturn;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @MockBean
    private ProductService service;

    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("GET api/v1/product/1 - FOUND")
    void testGetProductById() throws Exception {

        BigDecimal bigDecimal = new BigDecimal("1000");
        ProductDto mockProductDto = new ProductDto(1L, "product name", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");
        doReturn(mockProductDto).when(service).getProductById(1L);

        mockMvc.perform(get("/api/v1/product/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.product_name", is("product name")))
                .andExpect(jsonPath("$.unit_price", is(1000)))
                .andExpect(jsonPath("$.image_url", is("productImageUrl")))
                .andExpect(jsonPath("$.units_in_stock", is(100)))
                .andExpect(jsonPath("$.active", is(true)))
                .andExpect(jsonPath("$.gender_category", is("femme")))
                .andExpect(jsonPath("$.product_category", is("Manteaux")))
                .andExpect(jsonPath("$.brand_category", is("Alexander McQueen")));

    }

    @Test
    @DisplayName("GET api/v1/product/1 - NOT FOUND")
    void testGetProductByIdNotFound() throws Exception {

        doThrow(new ApiRequestException("Product not found in database!", HttpStatus.NOT_FOUND))
                .when(service).getProductById(1L);

        mockMvc.perform(get("/api/v1/product/1"))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("GET api/v1/product - FOUND")
    void testGetProduct() throws Exception {

        BigDecimal bigDecimal = new BigDecimal("1000");
        ProductDto mockProductDto1 = new ProductDto(1L, "product name1", bigDecimal,"productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");
        ProductDto mockProductDto2 = new ProductDto(2L, "product name2", bigDecimal,"productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");

        List<ProductDto> mockProductsDto = List.of(mockProductDto1, mockProductDto2);
        ProductsResponse mockProductsResponse = new ProductsResponse(mockProductsDto, 0, 10, 2L, 1);
        doReturn(mockProductsResponse).when(service).getProducts(2, Collections.singletonList(0), Collections.singletonList(0), 0, 10, new String[]{"id", "asc"});


        mockMvc.perform(get("/api/v1/product"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.products[0].id", is(1)))
                .andExpect(jsonPath("$.products[0].product_name", is("product name1")))
                .andExpect(jsonPath("$.products[0].unit_price", is(1000)))
                .andExpect(jsonPath("$.products[0].image_url", is("productImageUrl")))
                .andExpect(jsonPath("$.products[0].units_in_stock", is(100)))
                .andExpect(jsonPath("$.products[0].active", is(true)))
                .andExpect(jsonPath("$.products[0].gender_category", is("femme")))
                .andExpect(jsonPath("$.products[0].product_category", is("Manteaux")))
                .andExpect(jsonPath("$.products[0].brand_category", is("Alexander McQueen")))
                .andExpect(jsonPath("$.products[1].id", is(2)))
                .andExpect(jsonPath("$.products[1].product_name", is("product name2")))
                .andExpect(jsonPath("$.products[1].unit_price", is(1000)))
                .andExpect(jsonPath("$.products[1].image_url", is("productImageUrl")))
                .andExpect(jsonPath("$.products[1].units_in_stock", is(100)))
                .andExpect(jsonPath("$.products[1].active", is(true)))
                .andExpect(jsonPath("$.products[1].gender_category", is("femme")))
                .andExpect(jsonPath("$.products[1].product_category", is("Manteaux")))
                .andExpect(jsonPath("$.products[1].brand_category", is("Alexander McQueen")))
                .andExpect(jsonPath("$.current_page", is(0)))
                .andExpect(jsonPath("$.size", is(10)))
                .andExpect(jsonPath("$.total_items", is(2)))
                .andExpect(jsonPath("$.total_pages", is(1)));

    }

    @Test
    @DisplayName("GET api/v1/product - EMPTY LIST")
    void testGetProductNotFound() throws Exception {

        List<ProductDto> mockProductsDto = Collections.emptyList();
        ProductsResponse mockProductsResponse = new ProductsResponse(mockProductsDto, 0, 10, 0L, 1);
        doReturn(mockProductsResponse).when(service).getProducts(2, Collections.singletonList(0), Collections.singletonList(0), 0, 10, new String[]{"id", "asc"});



        mockMvc.perform(get("/api/v1/product"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.products", hasSize(0)))
                .andExpect(jsonPath("$.current_page", is(0)))
                .andExpect(jsonPath("$.size", is(10)))
                .andExpect(jsonPath("$.total_items", is(0)))
                .andExpect(jsonPath("$.total_pages", is(1)));

    }

    @Test
    @DisplayName("GET api/v1/product/new - FOUND")
    void testGetNewProduct() throws Exception {

        BigDecimal bigDecimal = new BigDecimal("1000");
        ProductDto mockProductDto1 = new ProductDto(1L, "product name1", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");
        ProductDto mockProductDto2 = new ProductDto(2L, "product name2", bigDecimal, "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");
        List<ProductDto> mockProductsDto = List.of(mockProductDto1, mockProductDto2);
        ProductsResponse mockProductsResponse = new ProductsResponse(mockProductsDto, 0, 10, 2L, 1);
        doReturn(mockProductsResponse).when(service).getNewProducts(2, 0, 10);


        mockMvc.perform(get("/api/v1/product/new"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.products[0].id", is(1)))
                .andExpect(jsonPath("$.products[0].product_name", is("product name1")))
                .andExpect(jsonPath("$.products[0].unit_price", is(1000)))
                .andExpect(jsonPath("$.products[0].image_url", is("productImageUrl")))
                .andExpect(jsonPath("$.products[0].units_in_stock", is(100)))
                .andExpect(jsonPath("$.products[0].active", is(true)))
                .andExpect(jsonPath("$.products[0].gender_category", is("femme")))
                .andExpect(jsonPath("$.products[0].product_category", is("Manteaux")))
                .andExpect(jsonPath("$.products[0].brand_category", is("Alexander McQueen")))
                .andExpect(jsonPath("$.products[1].id", is(2)))
                .andExpect(jsonPath("$.products[1].product_name", is("product name2")))
                .andExpect(jsonPath("$.products[1].unit_price", is(1000)))
                .andExpect(jsonPath("$.products[1].image_url", is("productImageUrl")))
                .andExpect(jsonPath("$.products[1].units_in_stock", is(100)))
                .andExpect(jsonPath("$.products[1].active", is(true)))
                .andExpect(jsonPath("$.products[1].gender_category", is("femme")))
                .andExpect(jsonPath("$.products[1].product_category", is("Manteaux")))
                .andExpect(jsonPath("$.products[1].brand_category", is("Alexander McQueen")))
                .andExpect(jsonPath("$.current_page", is(0)))
                .andExpect(jsonPath("$.size", is(10)))
                .andExpect(jsonPath("$.total_items", is(2)))
                .andExpect(jsonPath("$.total_pages", is(1)));

    }

    @Test
    @DisplayName("GET api/v1/product/new - EMPTY LIST")
    void testGetNewProductNotFound() throws Exception {

        List<ProductDto> mockProductsDto = Collections.emptyList();
        ProductsResponse mockProductsResponse = new ProductsResponse(mockProductsDto, 0, 10, 0L, 1);
        doReturn(mockProductsResponse).when(service).getNewProducts(2, 0, 10);



        mockMvc.perform(get("/api/v1/product/new"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.products", hasSize(0)))
                .andExpect(jsonPath("$.current_page", is(0)))
                .andExpect(jsonPath("$.size", is(10)))
                .andExpect(jsonPath("$.total_items", is(0)))
                .andExpect(jsonPath("$.total_pages", is(1)));

    }
}
