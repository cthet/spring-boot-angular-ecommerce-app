package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductsResponse {

    @JsonProperty("products")
    private ProductsDTO productsDTO;

    @JsonProperty("current_page")
    private int currentPage;

    @JsonProperty("size")
    private int size;

    @JsonProperty("total_items")
    private Long totalItems;

    @JsonProperty("total_pages")
    private int totalPages;

}

